import * as vscode from 'vscode';
import { startClient } from './lang-client';

export function activate(context: vscode.ExtensionContext) {
	startClient(context);
}

export function deactivate() {}
