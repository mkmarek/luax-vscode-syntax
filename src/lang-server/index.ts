import {
	createConnection,
	TextDocuments,
	TextDocument,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams
} from 'vscode-languageserver';
import * as chokidar from 'chokidar';
import * as fs from 'fs';
import * as path from 'path';
import { ANTLRInputStream, CommonTokenStream, Token, ANTLRErrorListener, Recognizer, RecognitionException, CommonToken } from 'antlr4ts';
import { luaxLexer } from '../grammar/ts/luaxLexer';
import { luaxParser, ElementNameContext } from '../grammar/ts/luaxParser';
import * as c3 from 'antlr4-c3';
import { luaxVisitor } from '../grammar/ts/luaxVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

let workspaceRoot: string | null | undefined;

let components: string[] = [];
let nativeComponents: string[] = [];

class ValidationVisitor extends AbstractParseTreeVisitor<Diagnostic[]> implements luaxVisitor<Diagnostic[]> {
	defaultResult() {
		return [];
	}

	aggregateResult(aggregate: Diagnostic[], nextResult: Diagnostic[]) {
		return [ ...aggregate, ...nextResult];
	  }
	
	visitElementName(ctx: ElementNameContext) {
		const componentName = ctx.payload.text;

		if (!components.length && !nativeComponents.length) {
			reloadComponentCache();
		}

		if (!components.includes(componentName) && !nativeComponents.includes(componentName)) {
			const error: Diagnostic = {
				severity: DiagnosticSeverity.Error,
				range: {
					start: { line: ctx.start.line - 1, character: ctx.start.charPositionInLine },
					end: { line: ctx.start.line - 1, character: ctx.start.charPositionInLine + componentName.length }
				},
				message: `Component ${componentName} is not defined`,
				source: 'ANTLR'
			};

			return [error];
		}

		return [];
	}
}

function reloadComponentCache() {
	components = workspaceRoot
		? fromDir(workspaceRoot, '.luax').map(e => path.basename(e, '.luax'))
		: [];

	nativeComponents = getNativeComponents();
}

connection.onInitialize((params: InitializeParams) => {
	workspaceRoot = params.rootPath;

	if (workspaceRoot) {
		const watcher = chokidar.watch(`${workspaceRoot}`, {
			persistent: true,
			ignored: /(^|[\/\\])\../, // ignore dotfiles
		});

		const add = (p: string) => {
			if (p.endsWith('.luax')) {
				const name = path.basename(p, '.luax');
				if (!components.includes(name)) {
					components.push(name);
				}
			}

			if (p.endsWith('.cs')) {
				const content = fs.readFileSync(p).toString('utf8');
				const regex = /\[NativeComponentRegistration\("(\w+)"\)\]/;
				const match = regex.exec(content);
				const name = match && match[1] || null;
				
				if (name && !nativeComponents.includes(name)) {
					nativeComponents.push(name);
				}
			}
		}

		const change = (p: string) => {
			if (p.endsWith('.cs')) {
				nativeComponents = getNativeComponents();
			}
		}

		const remove = (p: string) => {
			if (p.endsWith('.luax')) {
				const name = path.basename(p, '.luax');
				components = components.filter(e => e !== name);
			}

			if (p.endsWith('.cs')) {
				const content = fs.readFileSync(p).toString('utf8');
				const regex = /\[NativeComponentRegistration\("(\w+)"\)\]/;
				const match = regex.exec(content);
				const name = match && match[1] || null;
				
				nativeComponents = nativeComponents.filter(e => e !== name);
			}
		}
	
		watcher
			.on('add', add)
			.on('change', change)
			.on('unlink', remove);
	}

	let capabilities = params.capabilities;

	// Does the client support thre `workspace/configuration` request?
	// If not, we will fall back using global settings
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	return {
		capabilities: {
			textDocumentSync: documents.syncKind,
			// Tell the client that the server supports code completion
			completionProvider: {
				resolveProvider: true
			}
		}
	};
});

connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.
		return [
			{
				label: 'TypeScript',
				kind: CompletionItemKind.Text,
				data: 1
			},
			{
				label: 'JavaScript',
				kind: CompletionItemKind.Text,
				data: 2
			}
		];
	}
);

connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			item.detail = 'TypeScript details';
			item.documentation = 'TypeScript documentation';
		} else if (item.data === 2) {
			item.detail = 'JavaScript details';
			item.documentation = 'JavaScript documentation';
		}
		return item;
	}
);

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidSaveTextDocument(change => {
	reloadComponentCache();
});

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	reloadComponentCache();

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

class ErrorListener implements ANTLRErrorListener<Token> {
	public errors: Diagnostic[] = [];
	private textDocument: TextDocument;

	constructor(textDocument: TextDocument) {
		this.textDocument = textDocument;
	}

	syntaxError(recognizer: Recognizer<Token, any>,
		offendingSymbol: Token | undefined,
		line: number,
		charPositionInLine: number,
		message: string,
		e: RecognitionException | undefined) {
		if (offendingSymbol) {
			this.errors.push({
				severity: DiagnosticSeverity.Error,
				range: {
					start: this.textDocument.positionAt(offendingSymbol.startIndex),
					end: this.textDocument.positionAt(offendingSymbol.stopIndex)
				},
				message: message,
				source: 'ANTLR'
			});
		}
	}
}

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	let text = textDocument.getText();

	let inputStream = new ANTLRInputStream(text);
	let lexer = new luaxLexer(inputStream);
	let tokenStream = new CommonTokenStream(lexer);
	let parser = new luaxParser(tokenStream);
	const errorListener = new ErrorListener(textDocument);
	parser.addErrorListener(errorListener);

	const tree = parser.chunk();
	var visitor = new ValidationVisitor();
	const visitorErrors = visitor.visit(tree);

	const errors = [
		...errorListener.errors,
		...visitorErrors
	];

	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics: errors });
}

connection.onDidChangeTextDocument(() => {
	reloadComponentCache();
});

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	reloadComponentCache();
	connection.console.log('We received an file change event');
});

const getNativeComponents = () => {
	const result = [];
	const files = workspaceRoot
		? fromDir(workspaceRoot, '.cs')
		: [];

	for (let file of files) {
		const content = fs.readFileSync(file).toString('utf8');
		const regex = /\[NativeComponentRegistration\("(\w+)"\)\]/;
		const match = regex.exec(content);
		
		if (match && match[1]) {
			result.push(match[1]);
		}
	}

	return result;
}

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		const doc = documents.get(_textDocumentPosition.textDocument.uri);

		if (doc) {
			const text = doc.getText({ start: { character: 0, line: 0 }, end: _textDocumentPosition.position });
			const lexer = new luaxLexer(new ANTLRInputStream(text));
			let tokenStream = new CommonTokenStream(lexer);
			let parser = new luaxParser(tokenStream);
			const errorListener = new ErrorListener(doc);
			parser.addErrorListener(errorListener);

			parser.chunk();
			let core = new c3.CodeCompletionCore(parser);
			core.preferredRules.add(luaxParser.RULE_elementName);
			core.ignoredTokens = new Set([
				luaxLexer.NAME,
				luaxLexer.NORMALSTRING,
				luaxLexer.CHARSTRING,
				luaxLexer.LONGSTRING,
				luaxLexer.INT,
				luaxLexer.HEX,
				luaxLexer.FLOAT,
				luaxLexer.HEX_FLOAT,
				luaxLexer.COMMENT,
				luaxLexer.LINE_COMMENT,
				luaxLexer.WS,
				luaxLexer.SHEBANG,
			  ]);
			let candidates = core.collectCandidates(doc.offsetAt(_textDocumentPosition.position));

			let keywords: string[] = [];
			for (let candidate of candidates.tokens) {
				if (candidate[0] >= 0) {
					keywords.push(parser.vocabulary.getDisplayName(candidate[0]));
				}
			}

			let componentsToDisplay: string[] = [];
			let nativeComponentsToDisplay: string[] = [];
			for (let candidate of candidates.rules) {
				switch (candidate[0]) {
				  case luaxParser.RULE_elementName: {
					componentsToDisplay = components;
					nativeComponentsToDisplay = nativeComponents;
					break;
				  }
				}
			  }

			const items: CompletionItem[] = [
				...keywords.map<CompletionItem>(k => ({
					label: k.replace(/'/g, ''),
					kind: CompletionItemKind.Keyword,
					data: k
				})),
				...nativeComponentsToDisplay.map<CompletionItem>(k => ({
					label: k,
					kind: CompletionItemKind.Class,
					data: k
				})),
				...componentsToDisplay.map<CompletionItem>(k => ({
					label: k,
					kind: CompletionItemKind.Function,
					data: k
				}))
			];

			return items;
		}

		return [];
	}
);

function fromDir(startPath: string, filter: string): string[] {
	let result: string[] = [];

	if (!fs.existsSync(startPath)) {
		console.log("no dir ", startPath);
		return [];
	}

	const files = fs.readdirSync(startPath);
	for (let i = 0; i < files.length; i++) {
		const filename = path.join(startPath, files[i]);
		const stat = fs.lstatSync(filename);
		if (stat.isDirectory()) {
			result = [...result, ...fromDir(filename, filter)];
		}
		else if (filename.endsWith(filter)) {
			result.push(filename);
		}
	}

	return result;
}

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		return item;
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();