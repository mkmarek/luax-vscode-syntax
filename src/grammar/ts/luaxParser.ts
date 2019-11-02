// Generated from src/grammar/luax.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { luaxListener } from "./luaxListener";
import { luaxVisitor } from "./luaxVisitor";


export class luaxParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly NAME = 59;
	public static readonly NORMALSTRING = 60;
	public static readonly CHARSTRING = 61;
	public static readonly LONGSTRING = 62;
	public static readonly INT = 63;
	public static readonly HEX = 64;
	public static readonly FLOAT = 65;
	public static readonly HEX_FLOAT = 66;
	public static readonly COMMENT = 67;
	public static readonly LINE_COMMENT = 68;
	public static readonly WS = 69;
	public static readonly SHEBANG = 70;
	public static readonly RULE_chunk = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_stat = 2;
	public static readonly RULE_retstat = 3;
	public static readonly RULE_label = 4;
	public static readonly RULE_funcname = 5;
	public static readonly RULE_varlist = 6;
	public static readonly RULE_namelist = 7;
	public static readonly RULE_explist = 8;
	public static readonly RULE_exp = 9;
	public static readonly RULE_element = 10;
	public static readonly RULE_elementName = 11;
	public static readonly RULE_elementTerminator = 12;
	public static readonly RULE_elementChildren = 13;
	public static readonly RULE_prefixexp = 14;
	public static readonly RULE_functioncall = 15;
	public static readonly RULE_varOrExp = 16;
	public static readonly RULE_var = 17;
	public static readonly RULE_varSuffix = 18;
	public static readonly RULE_nameAndArgs = 19;
	public static readonly RULE_args = 20;
	public static readonly RULE_functiondef = 21;
	public static readonly RULE_funcbody = 22;
	public static readonly RULE_parlist = 23;
	public static readonly RULE_tableconstructor = 24;
	public static readonly RULE_fieldlist = 25;
	public static readonly RULE_field = 26;
	public static readonly RULE_fieldsep = 27;
	public static readonly RULE_operatorOr = 28;
	public static readonly RULE_operatorAnd = 29;
	public static readonly RULE_operatorComparison = 30;
	public static readonly RULE_operatorStrcat = 31;
	public static readonly RULE_operatorAddSub = 32;
	public static readonly RULE_operatorMulDivMod = 33;
	public static readonly RULE_operatorBitwise = 34;
	public static readonly RULE_operatorUnary = 35;
	public static readonly RULE_operatorPower = 36;
	public static readonly RULE_number = 37;
	public static readonly RULE_string = 38;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"chunk", "block", "stat", "retstat", "label", "funcname", "varlist", "namelist", 
		"explist", "exp", "element", "elementName", "elementTerminator", "elementChildren", 
		"prefixexp", "functioncall", "varOrExp", "var", "varSuffix", "nameAndArgs", 
		"args", "functiondef", "funcbody", "parlist", "tableconstructor", "fieldlist", 
		"field", "fieldsep", "operatorOr", "operatorAnd", "operatorComparison", 
		"operatorStrcat", "operatorAddSub", "operatorMulDivMod", "operatorBitwise", 
		"operatorUnary", "operatorPower", "number", "string",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'break'", "'goto'", "'do'", "'end'", "'while'", 
		"'repeat'", "'until'", "'if'", "'then'", "'elseif'", "'else'", "'for'", 
		"','", "'in'", "'function'", "'local'", "'return'", "'::'", "'.'", "':'", 
		"'nil'", "'false'", "'true'", "'...'", "'<'", "'={'", "'}'", "'/>'", "'>'", 
		"'</'", "'{'", "'('", "')'", "'['", "']'", "'or'", "'and'", "'<='", "'>='", 
		"'~='", "'=='", "'..'", "'+'", "'-'", "'*'", "'/'", "'%'", "'//'", "'&'", 
		"'|'", "'~'", "'<<'", "'>>'", "'not'", "'#'", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NAME", "NORMALSTRING", "CHARSTRING", 
		"LONGSTRING", "INT", "HEX", "FLOAT", "HEX_FLOAT", "COMMENT", "LINE_COMMENT", 
		"WS", "SHEBANG",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(luaxParser._LITERAL_NAMES, luaxParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return luaxParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "luax.g4"; }

	// @Override
	public get ruleNames(): string[] { return luaxParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return luaxParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(luaxParser._ATN, this);
	}
	// @RuleVersion(0)
	public chunk(): ChunkContext {
		let _localctx: ChunkContext = new ChunkContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, luaxParser.RULE_chunk);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.block();
			this.state = 79;
			this.match(luaxParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, luaxParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << luaxParser.T__0) | (1 << luaxParser.T__2) | (1 << luaxParser.T__3) | (1 << luaxParser.T__4) | (1 << luaxParser.T__6) | (1 << luaxParser.T__7) | (1 << luaxParser.T__9) | (1 << luaxParser.T__13) | (1 << luaxParser.T__16) | (1 << luaxParser.T__17) | (1 << luaxParser.T__19))) !== 0) || _la === luaxParser.T__33 || _la === luaxParser.NAME) {
				{
				{
				this.state = 81;
				this.stat();
				}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === luaxParser.T__18) {
				{
				this.state = 87;
				this.retstat();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let _localctx: StatContext = new StatContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, luaxParser.RULE_stat);
		let _la: number;
		try {
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				this.match(luaxParser.T__0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.varlist();
				this.state = 92;
				this.match(luaxParser.T__1);
				this.state = 93;
				this.explist();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 95;
				this.functioncall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 96;
				this.label();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 97;
				this.match(luaxParser.T__2);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 98;
				this.match(luaxParser.T__3);
				this.state = 99;
				this.match(luaxParser.NAME);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 100;
				this.match(luaxParser.T__4);
				this.state = 101;
				this.block();
				this.state = 102;
				this.match(luaxParser.T__5);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 104;
				this.match(luaxParser.T__6);
				this.state = 105;
				this.exp(0);
				this.state = 106;
				this.match(luaxParser.T__4);
				this.state = 107;
				this.block();
				this.state = 108;
				this.match(luaxParser.T__5);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 110;
				this.match(luaxParser.T__7);
				this.state = 111;
				this.block();
				this.state = 112;
				this.match(luaxParser.T__8);
				this.state = 113;
				this.exp(0);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 115;
				this.match(luaxParser.T__9);
				this.state = 116;
				this.exp(0);
				this.state = 117;
				this.match(luaxParser.T__10);
				this.state = 118;
				this.block();
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === luaxParser.T__11) {
					{
					{
					this.state = 119;
					this.match(luaxParser.T__11);
					this.state = 120;
					this.exp(0);
					this.state = 121;
					this.match(luaxParser.T__10);
					this.state = 122;
					this.block();
					}
					}
					this.state = 128;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === luaxParser.T__12) {
					{
					this.state = 129;
					this.match(luaxParser.T__12);
					this.state = 130;
					this.block();
					}
				}

				this.state = 133;
				this.match(luaxParser.T__5);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 135;
				this.match(luaxParser.T__13);
				this.state = 136;
				this.match(luaxParser.NAME);
				this.state = 137;
				this.match(luaxParser.T__1);
				this.state = 138;
				this.exp(0);
				this.state = 139;
				this.match(luaxParser.T__14);
				this.state = 140;
				this.exp(0);
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === luaxParser.T__14) {
					{
					this.state = 141;
					this.match(luaxParser.T__14);
					this.state = 142;
					this.exp(0);
					}
				}

				this.state = 145;
				this.match(luaxParser.T__4);
				this.state = 146;
				this.block();
				this.state = 147;
				this.match(luaxParser.T__5);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 149;
				this.match(luaxParser.T__13);
				this.state = 150;
				this.namelist();
				this.state = 151;
				this.match(luaxParser.T__15);
				this.state = 152;
				this.explist();
				this.state = 153;
				this.match(luaxParser.T__4);
				this.state = 154;
				this.block();
				this.state = 155;
				this.match(luaxParser.T__5);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 157;
				this.match(luaxParser.T__16);
				this.state = 158;
				this.funcname();
				this.state = 159;
				this.funcbody();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 161;
				this.match(luaxParser.T__17);
				this.state = 162;
				this.match(luaxParser.T__16);
				this.state = 163;
				this.match(luaxParser.NAME);
				this.state = 164;
				this.funcbody();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 165;
				this.match(luaxParser.T__17);
				this.state = 166;
				this.namelist();
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === luaxParser.T__1) {
					{
					this.state = 167;
					this.match(luaxParser.T__1);
					this.state = 168;
					this.explist();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public retstat(): RetstatContext {
		let _localctx: RetstatContext = new RetstatContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, luaxParser.RULE_retstat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.match(luaxParser.T__18);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (luaxParser.T__16 - 17)) | (1 << (luaxParser.T__22 - 17)) | (1 << (luaxParser.T__23 - 17)) | (1 << (luaxParser.T__24 - 17)) | (1 << (luaxParser.T__25 - 17)) | (1 << (luaxParser.T__26 - 17)) | (1 << (luaxParser.T__32 - 17)) | (1 << (luaxParser.T__33 - 17)) | (1 << (luaxParser.T__45 - 17)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (luaxParser.T__52 - 53)) | (1 << (luaxParser.T__55 - 53)) | (1 << (luaxParser.T__56 - 53)) | (1 << (luaxParser.NAME - 53)) | (1 << (luaxParser.NORMALSTRING - 53)) | (1 << (luaxParser.CHARSTRING - 53)) | (1 << (luaxParser.LONGSTRING - 53)) | (1 << (luaxParser.INT - 53)) | (1 << (luaxParser.HEX - 53)) | (1 << (luaxParser.FLOAT - 53)) | (1 << (luaxParser.HEX_FLOAT - 53)))) !== 0)) {
				{
				this.state = 174;
				this.explist();
				}
			}

			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === luaxParser.T__0) {
				{
				this.state = 177;
				this.match(luaxParser.T__0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, luaxParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(luaxParser.T__19);
			this.state = 181;
			this.match(luaxParser.NAME);
			this.state = 182;
			this.match(luaxParser.T__19);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcname(): FuncnameContext {
		let _localctx: FuncnameContext = new FuncnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, luaxParser.RULE_funcname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(luaxParser.NAME);
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === luaxParser.T__20) {
				{
				{
				this.state = 185;
				this.match(luaxParser.T__20);
				this.state = 186;
				this.match(luaxParser.NAME);
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === luaxParser.T__21) {
				{
				this.state = 192;
				this.match(luaxParser.T__21);
				this.state = 193;
				this.match(luaxParser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varlist(): VarlistContext {
		let _localctx: VarlistContext = new VarlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, luaxParser.RULE_varlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.var();
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === luaxParser.T__14) {
				{
				{
				this.state = 197;
				this.match(luaxParser.T__14);
				this.state = 198;
				this.var();
				}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namelist(): NamelistContext {
		let _localctx: NamelistContext = new NamelistContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, luaxParser.RULE_namelist);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(luaxParser.NAME);
			this.state = 209;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 205;
					this.match(luaxParser.T__14);
					this.state = 206;
					this.match(luaxParser.NAME);
					}
					}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explist(): ExplistContext {
		let _localctx: ExplistContext = new ExplistContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, luaxParser.RULE_explist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.exp(0);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === luaxParser.T__14) {
				{
				{
				this.state = 213;
				this.match(luaxParser.T__14);
				this.state = 214;
				this.exp(0);
				}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public exp(): ExpContext;
	public exp(_p: number): ExpContext;
	// @RuleVersion(0)
	public exp(_p?: number): ExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpContext = new ExpContext(this._ctx, _parentState);
		let _prevctx: ExpContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, luaxParser.RULE_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case luaxParser.T__22:
				{
				this.state = 221;
				this.match(luaxParser.T__22);
				}
				break;
			case luaxParser.T__23:
				{
				this.state = 222;
				this.match(luaxParser.T__23);
				}
				break;
			case luaxParser.T__24:
				{
				this.state = 223;
				this.match(luaxParser.T__24);
				}
				break;
			case luaxParser.INT:
			case luaxParser.HEX:
			case luaxParser.FLOAT:
			case luaxParser.HEX_FLOAT:
				{
				this.state = 224;
				this.number();
				}
				break;
			case luaxParser.NORMALSTRING:
			case luaxParser.CHARSTRING:
			case luaxParser.LONGSTRING:
				{
				this.state = 225;
				this.string();
				}
				break;
			case luaxParser.T__25:
				{
				this.state = 226;
				this.match(luaxParser.T__25);
				}
				break;
			case luaxParser.T__16:
				{
				this.state = 227;
				this.functiondef();
				}
				break;
			case luaxParser.T__33:
			case luaxParser.NAME:
				{
				this.state = 228;
				this.prefixexp();
				}
				break;
			case luaxParser.T__32:
				{
				this.state = 229;
				this.tableconstructor();
				}
				break;
			case luaxParser.T__45:
			case luaxParser.T__52:
			case luaxParser.T__55:
			case luaxParser.T__56:
				{
				this.state = 230;
				this.operatorUnary();
				this.state = 231;
				this.exp(9);
				}
				break;
			case luaxParser.T__26:
				{
				this.state = 233;
				this.element();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 270;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 268;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, luaxParser.RULE_exp);
						this.state = 236;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 237;
						this.operatorPower();
						this.state = 238;
						this.exp(10);
						}
						break;

					case 2:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, luaxParser.RULE_exp);
						this.state = 240;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 241;
						this.operatorMulDivMod();
						this.state = 242;
						this.exp(9);
						}
						break;

					case 3:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, luaxParser.RULE_exp);
						this.state = 244;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 245;
						this.operatorAddSub();
						this.state = 246;
						this.exp(8);
						}
						break;

					case 4:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, luaxParser.RULE_exp);
						this.state = 248;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 249;
						this.operatorStrcat();
						this.state = 250;
						this.exp(6);
						}
						break;

					case 5:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, luaxParser.RULE_exp);
						this.state = 252;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 253;
						this.operatorComparison();
						this.state = 254;
						this.exp(6);
						}
						break;

					case 6:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, luaxParser.RULE_exp);
						this.state = 256;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 257;
						this.operatorAnd();
						this.state = 258;
						this.exp(5);
						}
						break;

					case 7:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, luaxParser.RULE_exp);
						this.state = 260;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 261;
						this.operatorOr();
						this.state = 262;
						this.exp(4);
						}
						break;

					case 8:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, luaxParser.RULE_exp);
						this.state = 264;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 265;
						this.operatorBitwise();
						this.state = 266;
						this.exp(3);
						}
						break;
					}
					}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, luaxParser.RULE_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.match(luaxParser.T__26);
			this.state = 274;
			this.elementName();
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === luaxParser.NAME) {
				{
				{
				this.state = 275;
				this.match(luaxParser.NAME);
				this.state = 276;
				this.match(luaxParser.T__27);
				this.state = 277;
				this.exp(0);
				this.state = 278;
				this.match(luaxParser.T__28);
				}
				}
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 285;
			this.elementTerminator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementName(): ElementNameContext {
		let _localctx: ElementNameContext = new ElementNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, luaxParser.RULE_elementName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(luaxParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementTerminator(): ElementTerminatorContext {
		let _localctx: ElementTerminatorContext = new ElementTerminatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, luaxParser.RULE_elementTerminator);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case luaxParser.T__29:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 289;
				this.match(luaxParser.T__29);
				}
				break;
			case luaxParser.T__30:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 290;
				this.match(luaxParser.T__30);
				this.state = 291;
				this.elementChildren();
				this.state = 292;
				this.match(luaxParser.T__31);
				this.state = 293;
				this.match(luaxParser.NAME);
				this.state = 294;
				this.match(luaxParser.T__30);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementChildren(): ElementChildrenContext {
		let _localctx: ElementChildrenContext = new ElementChildrenContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, luaxParser.RULE_elementChildren);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === luaxParser.T__26 || _la === luaxParser.T__32) {
				{
				this.state = 303;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case luaxParser.T__26:
					{
					this.state = 298;
					this.element();
					}
					break;
				case luaxParser.T__32:
					{
					this.state = 299;
					this.match(luaxParser.T__32);
					this.state = 300;
					this.exp(0);
					this.state = 301;
					this.match(luaxParser.T__28);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prefixexp(): PrefixexpContext {
		let _localctx: PrefixexpContext = new PrefixexpContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, luaxParser.RULE_prefixexp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.varOrExp();
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 309;
					this.nameAndArgs();
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functioncall(): FunctioncallContext {
		let _localctx: FunctioncallContext = new FunctioncallContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, luaxParser.RULE_functioncall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.varOrExp();
			this.state = 317;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 316;
					this.nameAndArgs();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 319;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varOrExp(): VarOrExpContext {
		let _localctx: VarOrExpContext = new VarOrExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, luaxParser.RULE_varOrExp);
		try {
			this.state = 326;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 321;
				this.var();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 322;
				this.match(luaxParser.T__33);
				this.state = 323;
				this.exp(0);
				this.state = 324;
				this.match(luaxParser.T__34);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var(): VarContext {
		let _localctx: VarContext = new VarContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, luaxParser.RULE_var);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case luaxParser.NAME:
				{
				this.state = 328;
				this.match(luaxParser.NAME);
				}
				break;
			case luaxParser.T__33:
				{
				this.state = 329;
				this.match(luaxParser.T__33);
				this.state = 330;
				this.exp(0);
				this.state = 331;
				this.match(luaxParser.T__34);
				this.state = 332;
				this.varSuffix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 339;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 336;
					this.varSuffix();
					}
					}
				}
				this.state = 341;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varSuffix(): VarSuffixContext {
		let _localctx: VarSuffixContext = new VarSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, luaxParser.RULE_varSuffix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === luaxParser.T__21 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (luaxParser.T__32 - 33)) | (1 << (luaxParser.T__33 - 33)) | (1 << (luaxParser.NORMALSTRING - 33)) | (1 << (luaxParser.CHARSTRING - 33)) | (1 << (luaxParser.LONGSTRING - 33)))) !== 0)) {
				{
				{
				this.state = 342;
				this.nameAndArgs();
				}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 354;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case luaxParser.T__35:
				{
				this.state = 348;
				this.match(luaxParser.T__35);
				this.state = 349;
				this.exp(0);
				this.state = 350;
				this.match(luaxParser.T__36);
				}
				break;
			case luaxParser.T__20:
				{
				this.state = 352;
				this.match(luaxParser.T__20);
				this.state = 353;
				this.match(luaxParser.NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameAndArgs(): NameAndArgsContext {
		let _localctx: NameAndArgsContext = new NameAndArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, luaxParser.RULE_nameAndArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === luaxParser.T__21) {
				{
				this.state = 356;
				this.match(luaxParser.T__21);
				this.state = 357;
				this.match(luaxParser.NAME);
				}
			}

			this.state = 360;
			this.args();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, luaxParser.RULE_args);
		let _la: number;
		try {
			this.state = 369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case luaxParser.T__33:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 362;
				this.match(luaxParser.T__33);
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (luaxParser.T__16 - 17)) | (1 << (luaxParser.T__22 - 17)) | (1 << (luaxParser.T__23 - 17)) | (1 << (luaxParser.T__24 - 17)) | (1 << (luaxParser.T__25 - 17)) | (1 << (luaxParser.T__26 - 17)) | (1 << (luaxParser.T__32 - 17)) | (1 << (luaxParser.T__33 - 17)) | (1 << (luaxParser.T__45 - 17)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (luaxParser.T__52 - 53)) | (1 << (luaxParser.T__55 - 53)) | (1 << (luaxParser.T__56 - 53)) | (1 << (luaxParser.NAME - 53)) | (1 << (luaxParser.NORMALSTRING - 53)) | (1 << (luaxParser.CHARSTRING - 53)) | (1 << (luaxParser.LONGSTRING - 53)) | (1 << (luaxParser.INT - 53)) | (1 << (luaxParser.HEX - 53)) | (1 << (luaxParser.FLOAT - 53)) | (1 << (luaxParser.HEX_FLOAT - 53)))) !== 0)) {
					{
					this.state = 363;
					this.explist();
					}
				}

				this.state = 366;
				this.match(luaxParser.T__34);
				}
				break;
			case luaxParser.T__32:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 367;
				this.tableconstructor();
				}
				break;
			case luaxParser.NORMALSTRING:
			case luaxParser.CHARSTRING:
			case luaxParser.LONGSTRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 368;
				this.string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functiondef(): FunctiondefContext {
		let _localctx: FunctiondefContext = new FunctiondefContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, luaxParser.RULE_functiondef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(luaxParser.T__16);
			this.state = 372;
			this.funcbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcbody(): FuncbodyContext {
		let _localctx: FuncbodyContext = new FuncbodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, luaxParser.RULE_funcbody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(luaxParser.T__33);
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === luaxParser.T__25 || _la === luaxParser.NAME) {
				{
				this.state = 375;
				this.parlist();
				}
			}

			this.state = 378;
			this.match(luaxParser.T__34);
			this.state = 379;
			this.block();
			this.state = 380;
			this.match(luaxParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parlist(): ParlistContext {
		let _localctx: ParlistContext = new ParlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, luaxParser.RULE_parlist);
		let _la: number;
		try {
			this.state = 388;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case luaxParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 382;
				this.namelist();
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === luaxParser.T__14) {
					{
					this.state = 383;
					this.match(luaxParser.T__14);
					this.state = 384;
					this.match(luaxParser.T__25);
					}
				}

				}
				break;
			case luaxParser.T__25:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 387;
				this.match(luaxParser.T__25);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableconstructor(): TableconstructorContext {
		let _localctx: TableconstructorContext = new TableconstructorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, luaxParser.RULE_tableconstructor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(luaxParser.T__32);
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (luaxParser.T__16 - 17)) | (1 << (luaxParser.T__22 - 17)) | (1 << (luaxParser.T__23 - 17)) | (1 << (luaxParser.T__24 - 17)) | (1 << (luaxParser.T__25 - 17)) | (1 << (luaxParser.T__26 - 17)) | (1 << (luaxParser.T__32 - 17)) | (1 << (luaxParser.T__33 - 17)) | (1 << (luaxParser.T__35 - 17)) | (1 << (luaxParser.T__45 - 17)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (luaxParser.T__52 - 53)) | (1 << (luaxParser.T__55 - 53)) | (1 << (luaxParser.T__56 - 53)) | (1 << (luaxParser.NAME - 53)) | (1 << (luaxParser.NORMALSTRING - 53)) | (1 << (luaxParser.CHARSTRING - 53)) | (1 << (luaxParser.LONGSTRING - 53)) | (1 << (luaxParser.INT - 53)) | (1 << (luaxParser.HEX - 53)) | (1 << (luaxParser.FLOAT - 53)) | (1 << (luaxParser.HEX_FLOAT - 53)))) !== 0)) {
				{
				this.state = 391;
				this.fieldlist();
				}
			}

			this.state = 394;
			this.match(luaxParser.T__28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldlist(): FieldlistContext {
		let _localctx: FieldlistContext = new FieldlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, luaxParser.RULE_fieldlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.field();
			this.state = 402;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 397;
					this.fieldsep();
					this.state = 398;
					this.field();
					}
					}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === luaxParser.T__0 || _la === luaxParser.T__14) {
				{
				this.state = 405;
				this.fieldsep();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, luaxParser.RULE_field);
		try {
			this.state = 418;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 408;
				this.match(luaxParser.T__35);
				this.state = 409;
				this.exp(0);
				this.state = 410;
				this.match(luaxParser.T__36);
				this.state = 411;
				this.match(luaxParser.T__1);
				this.state = 412;
				this.exp(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 414;
				this.match(luaxParser.NAME);
				this.state = 415;
				this.match(luaxParser.T__1);
				this.state = 416;
				this.exp(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 417;
				this.exp(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldsep(): FieldsepContext {
		let _localctx: FieldsepContext = new FieldsepContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, luaxParser.RULE_fieldsep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			_la = this._input.LA(1);
			if (!(_la === luaxParser.T__0 || _la === luaxParser.T__14)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorOr(): OperatorOrContext {
		let _localctx: OperatorOrContext = new OperatorOrContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, luaxParser.RULE_operatorOr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.match(luaxParser.T__37);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorAnd(): OperatorAndContext {
		let _localctx: OperatorAndContext = new OperatorAndContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, luaxParser.RULE_operatorAnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(luaxParser.T__38);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorComparison(): OperatorComparisonContext {
		let _localctx: OperatorComparisonContext = new OperatorComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, luaxParser.RULE_operatorComparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			_la = this._input.LA(1);
			if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (luaxParser.T__26 - 27)) | (1 << (luaxParser.T__30 - 27)) | (1 << (luaxParser.T__39 - 27)) | (1 << (luaxParser.T__40 - 27)) | (1 << (luaxParser.T__41 - 27)) | (1 << (luaxParser.T__42 - 27)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorStrcat(): OperatorStrcatContext {
		let _localctx: OperatorStrcatContext = new OperatorStrcatContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, luaxParser.RULE_operatorStrcat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(luaxParser.T__43);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorAddSub(): OperatorAddSubContext {
		let _localctx: OperatorAddSubContext = new OperatorAddSubContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, luaxParser.RULE_operatorAddSub);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			_la = this._input.LA(1);
			if (!(_la === luaxParser.T__44 || _la === luaxParser.T__45)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorMulDivMod(): OperatorMulDivModContext {
		let _localctx: OperatorMulDivModContext = new OperatorMulDivModContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, luaxParser.RULE_operatorMulDivMod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			_la = this._input.LA(1);
			if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (luaxParser.T__46 - 47)) | (1 << (luaxParser.T__47 - 47)) | (1 << (luaxParser.T__48 - 47)) | (1 << (luaxParser.T__49 - 47)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorBitwise(): OperatorBitwiseContext {
		let _localctx: OperatorBitwiseContext = new OperatorBitwiseContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, luaxParser.RULE_operatorBitwise);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			_la = this._input.LA(1);
			if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (luaxParser.T__50 - 51)) | (1 << (luaxParser.T__51 - 51)) | (1 << (luaxParser.T__52 - 51)) | (1 << (luaxParser.T__53 - 51)) | (1 << (luaxParser.T__54 - 51)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorUnary(): OperatorUnaryContext {
		let _localctx: OperatorUnaryContext = new OperatorUnaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, luaxParser.RULE_operatorUnary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			_la = this._input.LA(1);
			if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (luaxParser.T__45 - 46)) | (1 << (luaxParser.T__52 - 46)) | (1 << (luaxParser.T__55 - 46)) | (1 << (luaxParser.T__56 - 46)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operatorPower(): OperatorPowerContext {
		let _localctx: OperatorPowerContext = new OperatorPowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, luaxParser.RULE_operatorPower);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this.match(luaxParser.T__57);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, luaxParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			_la = this._input.LA(1);
			if (!(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (luaxParser.INT - 63)) | (1 << (luaxParser.HEX - 63)) | (1 << (luaxParser.FLOAT - 63)) | (1 << (luaxParser.HEX_FLOAT - 63)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, luaxParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			_la = this._input.LA(1);
			if (!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (luaxParser.NORMALSTRING - 60)) | (1 << (luaxParser.CHARSTRING - 60)) | (1 << (luaxParser.LONGSTRING - 60)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.exp_sempred(_localctx as ExpContext, predIndex);
		}
		return true;
	}
	private exp_sempred(_localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);

		case 1:
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);

		case 4:
			return this.precpred(this._ctx, 5);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 3);

		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03H\u01BF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x07\x03U\n\x03\f\x03\x0E\x03X\v\x03\x03\x03\x05\x03[\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x7F\n\x04" +
		"\f\x04\x0E\x04\x82\v\x04\x03\x04\x03\x04\x05\x04\x86\n\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04\x92\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"\xAC\n\x04\x05\x04\xAE\n\x04\x03\x05\x03\x05\x05\x05\xB2\n\x05\x03\x05" +
		"\x05\x05\xB5\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x07\x07\xBE\n\x07\f\x07\x0E\x07\xC1\v\x07\x03\x07\x03\x07\x05\x07" +
		"\xC5\n\x07\x03\b\x03\b\x03\b\x07\b\xCA\n\b\f\b\x0E\b\xCD\v\b\x03\t\x03" +
		"\t\x03\t\x07\t\xD2\n\t\f\t\x0E\t\xD5\v\t\x03\n\x03\n\x03\n\x07\n\xDA\n" +
		"\n\f\n\x0E\n\xDD\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xED\n\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x07\v\u010F\n\v\f\v\x0E\v\u0112\v\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u011B\n\f\f\f\x0E\f\u011E\v\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u012B\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\u0132\n\x0F\f\x0F\x0E\x0F\u0135\v\x0F\x03\x10\x03\x10\x07\x10\u0139\n" +
		"\x10\f\x10\x0E\x10\u013C\v\x10\x03\x11\x03\x11\x06\x11\u0140\n\x11\r\x11" +
		"\x0E\x11\u0141\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0149\n" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0151\n\x13" +
		"\x03\x13\x07\x13\u0154\n\x13\f\x13\x0E\x13\u0157\v\x13\x03\x14\x07\x14" +
		"\u015A\n\x14\f\x14\x0E\x14\u015D\v\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\u0165\n\x14\x03\x15\x03\x15\x05\x15\u0169\n\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u016F\n\x16\x03\x16\x03\x16\x03" +
		"\x16\x05\x16\u0174\n\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18" +
		"\u017B\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x05" +
		"\x19\u0184\n\x19\x03\x19\x05\x19\u0187\n\x19\x03\x1A\x03\x1A\x05\x1A\u018B" +
		"\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0193\n" +
		"\x1B\f\x1B\x0E\x1B\u0196\v\x1B\x03\x1B\x05\x1B\u0199\n\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u01A5\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03" +
		"\'\x03\'\x03(\x03(\x03(\x02\x02\x03\x14)\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02\n" +
		"\x04\x02\x03\x03\x11\x11\x05\x02\x1D\x1D!!*-\x03\x02/0\x03\x0214\x03\x02" +
		"59\x05\x020077:;\x03\x02AD\x03\x02>@\x02\u01DB\x02P\x03\x02\x02\x02\x04" +
		"V\x03\x02\x02\x02\x06\xAD\x03\x02\x02\x02\b\xAF\x03\x02\x02\x02\n\xB6" +
		"\x03\x02\x02\x02\f\xBA\x03\x02\x02\x02\x0E\xC6\x03\x02\x02\x02\x10\xCE" +
		"\x03\x02\x02\x02\x12\xD6\x03\x02\x02\x02\x14\xEC\x03\x02\x02\x02\x16\u0113" +
		"\x03\x02\x02\x02\x18\u0121\x03\x02\x02\x02\x1A\u012A\x03\x02\x02\x02\x1C" +
		"\u0133\x03\x02\x02\x02\x1E\u0136\x03\x02\x02\x02 \u013D\x03\x02\x02\x02" +
		"\"\u0148\x03\x02\x02\x02$\u0150\x03\x02\x02\x02&\u015B\x03\x02\x02\x02" +
		"(\u0168\x03\x02\x02\x02*\u0173\x03\x02\x02\x02,\u0175\x03\x02\x02\x02" +
		".\u0178\x03\x02\x02\x020\u0186\x03\x02\x02\x022\u0188\x03\x02\x02\x02" +
		"4\u018E\x03\x02\x02\x026\u01A4\x03\x02\x02\x028\u01A6\x03\x02\x02\x02" +
		":\u01A8\x03\x02\x02\x02<\u01AA\x03\x02\x02\x02>\u01AC\x03\x02\x02\x02" +
		"@\u01AE\x03\x02\x02\x02B\u01B0\x03\x02\x02\x02D\u01B2\x03\x02\x02\x02" +
		"F\u01B4\x03\x02\x02\x02H\u01B6\x03\x02\x02\x02J\u01B8\x03\x02\x02\x02" +
		"L\u01BA\x03\x02\x02\x02N\u01BC\x03\x02\x02\x02PQ\x05\x04\x03\x02QR\x07" +
		"\x02\x02\x03R\x03\x03\x02\x02\x02SU\x05\x06\x04\x02TS\x03\x02\x02\x02" +
		"UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02WZ\x03\x02\x02\x02" +
		"XV\x03\x02\x02\x02Y[\x05\b\x05\x02ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
		"[\x05\x03\x02\x02\x02\\\xAE\x07\x03\x02\x02]^\x05\x0E\b\x02^_\x07\x04" +
		"\x02\x02_`\x05\x12\n\x02`\xAE\x03\x02\x02\x02a\xAE\x05 \x11\x02b\xAE\x05" +
		"\n\x06\x02c\xAE\x07\x05\x02\x02de\x07\x06\x02\x02e\xAE\x07=\x02\x02fg" +
		"\x07\x07\x02\x02gh\x05\x04\x03\x02hi\x07\b\x02\x02i\xAE\x03\x02\x02\x02" +
		"jk\x07\t\x02\x02kl\x05\x14\v\x02lm\x07\x07\x02\x02mn\x05\x04\x03\x02n" +
		"o\x07\b\x02\x02o\xAE\x03\x02\x02\x02pq\x07\n\x02\x02qr\x05\x04\x03\x02" +
		"rs\x07\v\x02\x02st\x05\x14\v\x02t\xAE\x03\x02\x02\x02uv\x07\f\x02\x02" +
		"vw\x05\x14\v\x02wx\x07\r\x02\x02x\x80\x05\x04\x03\x02yz\x07\x0E\x02\x02" +
		"z{\x05\x14\v\x02{|\x07\r\x02\x02|}\x05\x04\x03\x02}\x7F\x03\x02\x02\x02" +
		"~y\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81" +
		"\x03\x02\x02\x02\x81\x85\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\x84" +
		"\x07\x0F\x02\x02\x84\x86\x05\x04\x03\x02\x85\x83\x03\x02\x02\x02\x85\x86" +
		"\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x07\b\x02\x02\x88\xAE" +
		"\x03\x02\x02\x02\x89\x8A\x07\x10\x02\x02\x8A\x8B\x07=\x02\x02\x8B\x8C" +
		"\x07\x04\x02\x02\x8C\x8D\x05\x14\v\x02\x8D\x8E\x07\x11\x02\x02\x8E\x91" +
		"\x05\x14\v\x02\x8F\x90\x07\x11\x02\x02\x90\x92\x05\x14\v\x02\x91\x8F\x03" +
		"\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x07" +
		"\x07\x02\x02\x94\x95\x05\x04\x03\x02\x95\x96\x07\b\x02\x02\x96\xAE\x03" +
		"\x02\x02\x02\x97\x98\x07\x10\x02\x02\x98\x99\x05\x10\t\x02\x99\x9A\x07" +
		"\x12\x02\x02\x9A\x9B\x05\x12\n\x02\x9B\x9C\x07\x07\x02\x02\x9C\x9D\x05" +
		"\x04\x03\x02\x9D\x9E\x07\b\x02\x02\x9E\xAE\x03\x02\x02\x02\x9F\xA0\x07" +
		"\x13\x02\x02\xA0\xA1\x05\f\x07\x02\xA1\xA2\x05.\x18\x02\xA2\xAE\x03\x02" +
		"\x02\x02\xA3\xA4\x07\x14\x02\x02\xA4\xA5\x07\x13\x02\x02\xA5\xA6\x07=" +
		"\x02\x02\xA6\xAE\x05.\x18\x02\xA7\xA8\x07\x14\x02\x02\xA8\xAB\x05\x10" +
		"\t\x02\xA9\xAA\x07\x04\x02\x02\xAA\xAC\x05\x12\n\x02\xAB\xA9\x03\x02\x02" +
		"\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\\\x03\x02\x02" +
		"\x02\xAD]\x03\x02\x02\x02\xADa\x03\x02\x02\x02\xADb\x03\x02\x02\x02\xAD" +
		"c\x03\x02\x02\x02\xADd\x03\x02\x02\x02\xADf\x03\x02\x02\x02\xADj\x03\x02" +
		"\x02\x02\xADp\x03\x02\x02\x02\xADu\x03\x02\x02\x02\xAD\x89\x03\x02\x02" +
		"\x02\xAD\x97\x03\x02\x02\x02\xAD\x9F\x03\x02\x02\x02\xAD\xA3\x03\x02\x02" +
		"\x02\xAD\xA7\x03\x02\x02\x02\xAE\x07\x03\x02\x02\x02\xAF\xB1\x07\x15\x02" +
		"\x02\xB0\xB2\x05\x12\n\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02" +
		"\x02\xB2\xB4\x03\x02\x02\x02\xB3\xB5\x07\x03\x02\x02\xB4\xB3\x03\x02\x02" +
		"\x02\xB4\xB5\x03\x02\x02\x02\xB5\t\x03\x02\x02\x02\xB6\xB7\x07\x16\x02" +
		"\x02\xB7\xB8\x07=\x02\x02\xB8\xB9\x07\x16\x02\x02\xB9\v\x03\x02\x02\x02" +
		"\xBA\xBF\x07=\x02\x02\xBB\xBC\x07\x17\x02\x02\xBC\xBE\x07=\x02\x02\xBD" +
		"\xBB\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF" +
		"\xC0\x03\x02\x02\x02\xC0\xC4\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2" +
		"\xC3\x07\x18\x02\x02\xC3\xC5\x07=\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4" +
		"\xC5\x03\x02\x02\x02\xC5\r\x03\x02\x02\x02\xC6\xCB\x05$\x13\x02\xC7\xC8" +
		"\x07\x11\x02\x02\xC8\xCA\x05$\x13\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCD" +
		"\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\x0F" +
		"\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD3\x07=\x02\x02\xCF\xD0" +
		"\x07\x11\x02\x02\xD0\xD2\x07=\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD5" +
		"\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\x11" +
		"\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xDB\x05\x14\v\x02\xD7\xD8" +
		"\x07\x11\x02\x02\xD8\xDA\x05\x14\v\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDD" +
		"\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\x13" +
		"\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xDF\b\v\x01\x02\xDF\xED\x07" +
		"\x19\x02\x02\xE0\xED\x07\x1A\x02\x02\xE1\xED\x07\x1B\x02\x02\xE2\xED\x05" +
		"L\'\x02\xE3\xED\x05N(\x02\xE4\xED\x07\x1C\x02\x02\xE5\xED\x05,\x17\x02" +
		"\xE6\xED\x05\x1E\x10\x02\xE7\xED\x052\x1A\x02\xE8\xE9\x05H%\x02\xE9\xEA" +
		"\x05\x14\v\v\xEA\xED\x03\x02\x02\x02\xEB\xED\x05\x16\f\x02\xEC\xDE\x03" +
		"\x02\x02\x02\xEC\xE0\x03\x02\x02\x02\xEC\xE1\x03\x02\x02\x02\xEC\xE2\x03" +
		"\x02\x02\x02\xEC\xE3\x03\x02\x02\x02\xEC\xE4\x03\x02\x02\x02\xEC\xE5\x03" +
		"\x02\x02\x02\xEC\xE6\x03\x02\x02\x02\xEC\xE7\x03\x02\x02\x02\xEC\xE8\x03" +
		"\x02\x02\x02\xEC\xEB\x03\x02\x02\x02\xED\u0110\x03\x02\x02\x02\xEE\xEF" +
		"\f\f\x02\x02\xEF\xF0\x05J&\x02\xF0\xF1\x05\x14\v\f\xF1\u010F\x03\x02\x02" +
		"\x02\xF2\xF3\f\n\x02\x02\xF3\xF4\x05D#\x02\xF4\xF5\x05\x14\v\v\xF5\u010F" +
		"\x03\x02\x02\x02\xF6\xF7\f\t\x02\x02\xF7\xF8\x05B\"\x02\xF8\xF9\x05\x14" +
		"\v\n\xF9\u010F\x03\x02\x02\x02\xFA\xFB\f\b\x02\x02\xFB\xFC\x05@!\x02\xFC" +
		"\xFD\x05\x14\v\b\xFD\u010F\x03\x02\x02\x02\xFE\xFF\f\x07\x02\x02\xFF\u0100" +
		"\x05> \x02\u0100\u0101\x05\x14\v\b\u0101\u010F\x03\x02\x02\x02\u0102\u0103" +
		"\f\x06\x02\x02\u0103\u0104\x05<\x1F\x02\u0104\u0105\x05\x14\v\x07\u0105" +
		"\u010F\x03\x02\x02\x02\u0106\u0107\f\x05\x02\x02\u0107\u0108\x05:\x1E" +
		"\x02\u0108\u0109\x05\x14\v\x06\u0109\u010F\x03\x02\x02\x02\u010A\u010B" +
		"\f\x04\x02\x02\u010B\u010C\x05F$\x02\u010C\u010D\x05\x14\v\x05\u010D\u010F" +
		"\x03\x02\x02\x02\u010E\xEE\x03\x02\x02\x02\u010E\xF2\x03\x02\x02\x02\u010E" +
		"\xF6\x03\x02\x02\x02\u010E\xFA\x03\x02\x02\x02\u010E\xFE\x03\x02\x02\x02" +
		"\u010E\u0102\x03\x02\x02\x02\u010E\u0106\x03\x02\x02\x02\u010E\u010A\x03" +
		"\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110" +
		"\u0111\x03\x02\x02\x02\u0111\x15\x03\x02\x02\x02\u0112\u0110\x03\x02\x02" +
		"\x02\u0113\u0114\x07\x1D\x02\x02\u0114\u011C\x05\x18\r\x02\u0115\u0116" +
		"\x07=\x02\x02\u0116\u0117\x07\x1E\x02\x02\u0117\u0118\x05\x14\v\x02\u0118" +
		"\u0119\x07\x1F\x02\x02\u0119\u011B\x03\x02\x02\x02\u011A\u0115\x03\x02" +
		"\x02\x02\u011B\u011E\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C" +
		"\u011D\x03\x02\x02\x02\u011D\u011F\x03\x02\x02\x02\u011E\u011C\x03\x02" +
		"\x02\x02\u011F\u0120\x05\x1A\x0E\x02\u0120\x17\x03\x02\x02\x02\u0121\u0122" +
		"\x07=\x02\x02\u0122\x19\x03\x02\x02\x02\u0123\u012B\x07 \x02\x02\u0124" +
		"\u0125\x07!\x02\x02\u0125\u0126\x05\x1C\x0F\x02\u0126\u0127\x07\"\x02" +
		"\x02\u0127\u0128\x07=\x02\x02\u0128\u0129\x07!\x02\x02\u0129\u012B\x03" +
		"\x02\x02\x02\u012A\u0123\x03\x02\x02\x02\u012A\u0124\x03\x02\x02\x02\u012B" +
		"\x1B\x03\x02\x02\x02\u012C\u0132\x05\x16\f\x02\u012D\u012E\x07#\x02\x02" +
		"\u012E\u012F\x05\x14\v\x02\u012F\u0130\x07\x1F\x02\x02\u0130\u0132\x03" +
		"\x02\x02\x02\u0131\u012C\x03\x02\x02\x02\u0131\u012D\x03\x02\x02\x02\u0132" +
		"\u0135\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02" +
		"\x02\x02\u0134\x1D\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136\u013A" +
		"\x05\"\x12\x02\u0137\u0139\x05(\x15\x02\u0138\u0137\x03\x02\x02\x02\u0139" +
		"\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02" +
		"\x02\x02\u013B\x1F\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D\u013F" +
		"\x05\"\x12\x02\u013E\u0140\x05(\x15\x02\u013F\u013E\x03\x02\x02\x02\u0140" +
		"\u0141\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02" +
		"\x02\x02\u0142!\x03\x02\x02\x02\u0143\u0149\x05$\x13\x02\u0144\u0145\x07" +
		"$\x02\x02\u0145\u0146\x05\x14\v\x02\u0146\u0147\x07%\x02\x02\u0147\u0149" +
		"\x03\x02\x02\x02\u0148\u0143\x03\x02\x02\x02\u0148\u0144\x03\x02\x02\x02" +
		"\u0149#\x03\x02\x02\x02\u014A\u0151\x07=\x02\x02\u014B\u014C\x07$\x02" +
		"\x02\u014C\u014D\x05\x14\v\x02\u014D\u014E\x07%\x02\x02\u014E\u014F\x05" +
		"&\x14\x02\u014F\u0151\x03\x02\x02\x02\u0150\u014A\x03\x02\x02\x02\u0150" +
		"\u014B\x03\x02\x02\x02\u0151\u0155\x03\x02\x02\x02\u0152\u0154\x05&\x14" +
		"\x02\u0153\u0152\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153" +
		"\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156%\x03\x02\x02\x02\u0157" +
		"\u0155\x03\x02\x02\x02\u0158\u015A\x05(\x15\x02\u0159\u0158\x03\x02\x02" +
		"\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C" +
		"\x03\x02\x02\x02\u015C\u0164\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02" +
		"\u015E\u015F\x07&\x02\x02\u015F\u0160\x05\x14\v\x02\u0160\u0161\x07\'" +
		"\x02\x02\u0161\u0165\x03\x02\x02\x02\u0162\u0163\x07\x17\x02\x02\u0163" +
		"\u0165\x07=\x02\x02\u0164\u015E\x03\x02\x02\x02\u0164\u0162\x03\x02\x02" +
		"\x02\u0165\'\x03\x02\x02\x02\u0166\u0167\x07\x18\x02\x02\u0167\u0169\x07" +
		"=\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169" +
		"\u016A\x03\x02\x02\x02\u016A\u016B\x05*\x16\x02\u016B)\x03\x02\x02\x02" +
		"\u016C\u016E\x07$\x02\x02\u016D\u016F\x05\x12\n\x02\u016E\u016D\x03\x02" +
		"\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170" +
		"\u0174\x07%\x02\x02\u0171\u0174\x052\x1A\x02\u0172\u0174\x05N(\x02\u0173" +
		"\u016C\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0172\x03\x02" +
		"\x02\x02\u0174+\x03\x02\x02\x02\u0175\u0176\x07\x13\x02\x02\u0176\u0177" +
		"\x05.\x18\x02\u0177-\x03\x02\x02\x02\u0178\u017A\x07$\x02\x02\u0179\u017B" +
		"\x050\x19\x02\u017A\u0179\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02" +
		"\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x07%\x02\x02\u017D\u017E\x05" +
		"\x04\x03\x02\u017E\u017F\x07\b\x02\x02\u017F/\x03\x02\x02\x02\u0180\u0183" +
		"\x05\x10\t\x02\u0181\u0182\x07\x11\x02\x02\u0182\u0184\x07\x1C\x02\x02" +
		"\u0183\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0187\x03" +
		"\x02\x02\x02\u0185\u0187\x07\x1C\x02\x02\u0186\u0180\x03\x02\x02\x02\u0186" +
		"\u0185\x03\x02\x02\x02\u01871\x03\x02\x02\x02\u0188\u018A\x07#\x02\x02" +
		"\u0189\u018B\x054\x1B\x02\u018A\u0189\x03\x02\x02\x02\u018A\u018B\x03" +
		"\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x07\x1F\x02\x02\u018D" +
		"3\x03\x02\x02\x02\u018E\u0194\x056\x1C\x02\u018F\u0190\x058\x1D\x02\u0190" +
		"\u0191\x056\x1C\x02\u0191\u0193\x03\x02\x02\x02\u0192\u018F\x03\x02\x02" +
		"\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194\u0195" +
		"\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02" +
		"\u0197\u0199\x058\x1D\x02\u0198\u0197\x03\x02\x02\x02\u0198\u0199\x03" +
		"\x02\x02\x02\u01995\x03\x02\x02\x02\u019A\u019B\x07&\x02\x02\u019B\u019C" +
		"\x05\x14\v\x02\u019C\u019D\x07\'\x02\x02\u019D\u019E\x07\x04\x02\x02\u019E" +
		"\u019F\x05\x14\v\x02\u019F\u01A5\x03\x02\x02\x02\u01A0\u01A1\x07=\x02" +
		"\x02\u01A1\u01A2\x07\x04\x02\x02\u01A2\u01A5\x05\x14\v\x02\u01A3\u01A5" +
		"\x05\x14\v\x02\u01A4\u019A\x03\x02\x02\x02\u01A4\u01A0\x03\x02\x02\x02" +
		"\u01A4\u01A3\x03\x02\x02\x02\u01A57\x03\x02\x02\x02\u01A6\u01A7\t\x02" +
		"\x02\x02\u01A79\x03\x02\x02\x02\u01A8\u01A9\x07(\x02\x02\u01A9;\x03\x02" +
		"\x02\x02\u01AA\u01AB\x07)\x02\x02\u01AB=\x03\x02\x02\x02\u01AC\u01AD\t" +
		"\x03\x02\x02\u01AD?\x03\x02\x02\x02\u01AE\u01AF\x07.\x02\x02\u01AFA\x03" +
		"\x02\x02\x02\u01B0\u01B1\t\x04\x02\x02\u01B1C\x03\x02\x02\x02\u01B2\u01B3" +
		"\t\x05\x02\x02\u01B3E\x03\x02\x02\x02\u01B4\u01B5\t\x06\x02\x02\u01B5" +
		"G\x03\x02\x02\x02\u01B6\u01B7\t\x07\x02\x02\u01B7I\x03\x02\x02\x02\u01B8" +
		"\u01B9\x07<\x02\x02\u01B9K\x03\x02\x02\x02\u01BA\u01BB\t\b\x02\x02\u01BB" +
		"M\x03\x02\x02\x02\u01BC\u01BD\t\t\x02\x02\u01BDO\x03\x02\x02\x02(VZ\x80" +
		"\x85\x91\xAB\xAD\xB1\xB4\xBF\xC4\xCB\xD3\xDB\xEC\u010E\u0110\u011C\u012A" +
		"\u0131\u0133\u013A\u0141\u0148\u0150\u0155\u015B\u0164\u0168\u016E\u0173" +
		"\u017A\u0183\u0186\u018A\u0194\u0198\u01A4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!luaxParser.__ATN) {
			luaxParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(luaxParser._serializedATN));
		}

		return luaxParser.__ATN;
	}

}

export class ChunkContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public EOF(): TerminalNode { return this.getToken(luaxParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_chunk; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterChunk) {
			listener.enterChunk(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitChunk) {
			listener.exitChunk(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitChunk) {
			return visitor.visitChunk(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public stat(): StatContext[];
	public stat(i: number): StatContext;
	public stat(i?: number): StatContext | StatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatContext);
		} else {
			return this.getRuleContext(i, StatContext);
		}
	}
	public retstat(): RetstatContext | undefined {
		return this.tryGetRuleContext(0, RetstatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_block; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	public varlist(): VarlistContext | undefined {
		return this.tryGetRuleContext(0, VarlistContext);
	}
	public explist(): ExplistContext | undefined {
		return this.tryGetRuleContext(0, ExplistContext);
	}
	public functioncall(): FunctioncallContext | undefined {
		return this.tryGetRuleContext(0, FunctioncallContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(luaxParser.NAME, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public namelist(): NamelistContext | undefined {
		return this.tryGetRuleContext(0, NamelistContext);
	}
	public funcname(): FuncnameContext | undefined {
		return this.tryGetRuleContext(0, FuncnameContext);
	}
	public funcbody(): FuncbodyContext | undefined {
		return this.tryGetRuleContext(0, FuncbodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_stat; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterStat) {
			listener.enterStat(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitStat) {
			listener.exitStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitStat) {
			return visitor.visitStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RetstatContext extends ParserRuleContext {
	public explist(): ExplistContext | undefined {
		return this.tryGetRuleContext(0, ExplistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_retstat; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterRetstat) {
			listener.enterRetstat(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitRetstat) {
			listener.exitRetstat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitRetstat) {
			return visitor.visitRetstat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(luaxParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_label; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncnameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(luaxParser.NAME);
		} else {
			return this.getToken(luaxParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_funcname; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterFuncname) {
			listener.enterFuncname(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitFuncname) {
			listener.exitFuncname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitFuncname) {
			return visitor.visitFuncname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarlistContext extends ParserRuleContext {
	public var(): VarContext[];
	public var(i: number): VarContext;
	public var(i?: number): VarContext | VarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarContext);
		} else {
			return this.getRuleContext(i, VarContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_varlist; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterVarlist) {
			listener.enterVarlist(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitVarlist) {
			listener.exitVarlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitVarlist) {
			return visitor.visitVarlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamelistContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(luaxParser.NAME);
		} else {
			return this.getToken(luaxParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_namelist; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterNamelist) {
			listener.enterNamelist(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitNamelist) {
			listener.exitNamelist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitNamelist) {
			return visitor.visitNamelist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplistContext extends ParserRuleContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_explist; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterExplist) {
			listener.enterExplist(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitExplist) {
			listener.exitExplist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitExplist) {
			return visitor.visitExplist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public functiondef(): FunctiondefContext | undefined {
		return this.tryGetRuleContext(0, FunctiondefContext);
	}
	public prefixexp(): PrefixexpContext | undefined {
		return this.tryGetRuleContext(0, PrefixexpContext);
	}
	public tableconstructor(): TableconstructorContext | undefined {
		return this.tryGetRuleContext(0, TableconstructorContext);
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public operatorPower(): OperatorPowerContext | undefined {
		return this.tryGetRuleContext(0, OperatorPowerContext);
	}
	public operatorUnary(): OperatorUnaryContext | undefined {
		return this.tryGetRuleContext(0, OperatorUnaryContext);
	}
	public operatorMulDivMod(): OperatorMulDivModContext | undefined {
		return this.tryGetRuleContext(0, OperatorMulDivModContext);
	}
	public operatorAddSub(): OperatorAddSubContext | undefined {
		return this.tryGetRuleContext(0, OperatorAddSubContext);
	}
	public operatorStrcat(): OperatorStrcatContext | undefined {
		return this.tryGetRuleContext(0, OperatorStrcatContext);
	}
	public operatorComparison(): OperatorComparisonContext | undefined {
		return this.tryGetRuleContext(0, OperatorComparisonContext);
	}
	public operatorAnd(): OperatorAndContext | undefined {
		return this.tryGetRuleContext(0, OperatorAndContext);
	}
	public operatorOr(): OperatorOrContext | undefined {
		return this.tryGetRuleContext(0, OperatorOrContext);
	}
	public operatorBitwise(): OperatorBitwiseContext | undefined {
		return this.tryGetRuleContext(0, OperatorBitwiseContext);
	}
	public element(): ElementContext | undefined {
		return this.tryGetRuleContext(0, ElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_exp; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterExp) {
			listener.enterExp(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitExp) {
			listener.exitExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitExp) {
			return visitor.visitExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public elementName(): ElementNameContext {
		return this.getRuleContext(0, ElementNameContext);
	}
	public elementTerminator(): ElementTerminatorContext {
		return this.getRuleContext(0, ElementTerminatorContext);
	}
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(luaxParser.NAME);
		} else {
			return this.getToken(luaxParser.NAME, i);
		}
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_element; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(luaxParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_elementName; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterElementName) {
			listener.enterElementName(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitElementName) {
			listener.exitElementName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitElementName) {
			return visitor.visitElementName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementTerminatorContext extends ParserRuleContext {
	public elementChildren(): ElementChildrenContext | undefined {
		return this.tryGetRuleContext(0, ElementChildrenContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(luaxParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_elementTerminator; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterElementTerminator) {
			listener.enterElementTerminator(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitElementTerminator) {
			listener.exitElementTerminator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitElementTerminator) {
			return visitor.visitElementTerminator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementChildrenContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_elementChildren; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterElementChildren) {
			listener.enterElementChildren(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitElementChildren) {
			listener.exitElementChildren(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitElementChildren) {
			return visitor.visitElementChildren(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixexpContext extends ParserRuleContext {
	public varOrExp(): VarOrExpContext {
		return this.getRuleContext(0, VarOrExpContext);
	}
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_prefixexp; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterPrefixexp) {
			listener.enterPrefixexp(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitPrefixexp) {
			listener.exitPrefixexp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitPrefixexp) {
			return visitor.visitPrefixexp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctioncallContext extends ParserRuleContext {
	public varOrExp(): VarOrExpContext {
		return this.getRuleContext(0, VarOrExpContext);
	}
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_functioncall; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterFunctioncall) {
			listener.enterFunctioncall(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitFunctioncall) {
			listener.exitFunctioncall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitFunctioncall) {
			return visitor.visitFunctioncall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarOrExpContext extends ParserRuleContext {
	public var(): VarContext | undefined {
		return this.tryGetRuleContext(0, VarContext);
	}
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_varOrExp; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterVarOrExp) {
			listener.enterVarOrExp(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitVarOrExp) {
			listener.exitVarOrExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitVarOrExp) {
			return visitor.visitVarOrExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(luaxParser.NAME, 0); }
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public varSuffix(): VarSuffixContext[];
	public varSuffix(i: number): VarSuffixContext;
	public varSuffix(i?: number): VarSuffixContext | VarSuffixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarSuffixContext);
		} else {
			return this.getRuleContext(i, VarSuffixContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_var; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitVar) {
			return visitor.visitVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarSuffixContext extends ParserRuleContext {
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(luaxParser.NAME, 0); }
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_varSuffix; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterVarSuffix) {
			listener.enterVarSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitVarSuffix) {
			listener.exitVarSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitVarSuffix) {
			return visitor.visitVarSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameAndArgsContext extends ParserRuleContext {
	public args(): ArgsContext {
		return this.getRuleContext(0, ArgsContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(luaxParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_nameAndArgs; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterNameAndArgs) {
			listener.enterNameAndArgs(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitNameAndArgs) {
			listener.exitNameAndArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitNameAndArgs) {
			return visitor.visitNameAndArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	public explist(): ExplistContext | undefined {
		return this.tryGetRuleContext(0, ExplistContext);
	}
	public tableconstructor(): TableconstructorContext | undefined {
		return this.tryGetRuleContext(0, TableconstructorContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_args; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterArgs) {
			listener.enterArgs(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitArgs) {
			listener.exitArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitArgs) {
			return visitor.visitArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctiondefContext extends ParserRuleContext {
	public funcbody(): FuncbodyContext {
		return this.getRuleContext(0, FuncbodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_functiondef; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterFunctiondef) {
			listener.enterFunctiondef(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitFunctiondef) {
			listener.exitFunctiondef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitFunctiondef) {
			return visitor.visitFunctiondef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncbodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parlist(): ParlistContext | undefined {
		return this.tryGetRuleContext(0, ParlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_funcbody; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterFuncbody) {
			listener.enterFuncbody(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitFuncbody) {
			listener.exitFuncbody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitFuncbody) {
			return visitor.visitFuncbody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParlistContext extends ParserRuleContext {
	public namelist(): NamelistContext | undefined {
		return this.tryGetRuleContext(0, NamelistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_parlist; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterParlist) {
			listener.enterParlist(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitParlist) {
			listener.exitParlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitParlist) {
			return visitor.visitParlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableconstructorContext extends ParserRuleContext {
	public fieldlist(): FieldlistContext | undefined {
		return this.tryGetRuleContext(0, FieldlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_tableconstructor; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterTableconstructor) {
			listener.enterTableconstructor(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitTableconstructor) {
			listener.exitTableconstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitTableconstructor) {
			return visitor.visitTableconstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldlistContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public fieldsep(): FieldsepContext[];
	public fieldsep(i: number): FieldsepContext;
	public fieldsep(i?: number): FieldsepContext | FieldsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldsepContext);
		} else {
			return this.getRuleContext(i, FieldsepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_fieldlist; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterFieldlist) {
			listener.enterFieldlist(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitFieldlist) {
			listener.exitFieldlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitFieldlist) {
			return visitor.visitFieldlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(luaxParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_field; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldsepContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_fieldsep; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterFieldsep) {
			listener.enterFieldsep(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitFieldsep) {
			listener.exitFieldsep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitFieldsep) {
			return visitor.visitFieldsep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorOrContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_operatorOr; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterOperatorOr) {
			listener.enterOperatorOr(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitOperatorOr) {
			listener.exitOperatorOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitOperatorOr) {
			return visitor.visitOperatorOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorAndContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_operatorAnd; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterOperatorAnd) {
			listener.enterOperatorAnd(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitOperatorAnd) {
			listener.exitOperatorAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitOperatorAnd) {
			return visitor.visitOperatorAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorComparisonContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_operatorComparison; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterOperatorComparison) {
			listener.enterOperatorComparison(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitOperatorComparison) {
			listener.exitOperatorComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitOperatorComparison) {
			return visitor.visitOperatorComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorStrcatContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_operatorStrcat; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterOperatorStrcat) {
			listener.enterOperatorStrcat(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitOperatorStrcat) {
			listener.exitOperatorStrcat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitOperatorStrcat) {
			return visitor.visitOperatorStrcat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorAddSubContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_operatorAddSub; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterOperatorAddSub) {
			listener.enterOperatorAddSub(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitOperatorAddSub) {
			listener.exitOperatorAddSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitOperatorAddSub) {
			return visitor.visitOperatorAddSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorMulDivModContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_operatorMulDivMod; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterOperatorMulDivMod) {
			listener.enterOperatorMulDivMod(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitOperatorMulDivMod) {
			listener.exitOperatorMulDivMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitOperatorMulDivMod) {
			return visitor.visitOperatorMulDivMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorBitwiseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_operatorBitwise; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterOperatorBitwise) {
			listener.enterOperatorBitwise(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitOperatorBitwise) {
			listener.exitOperatorBitwise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitOperatorBitwise) {
			return visitor.visitOperatorBitwise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorUnaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_operatorUnary; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterOperatorUnary) {
			listener.enterOperatorUnary(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitOperatorUnary) {
			listener.exitOperatorUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitOperatorUnary) {
			return visitor.visitOperatorUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorPowerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_operatorPower; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterOperatorPower) {
			listener.enterOperatorPower(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitOperatorPower) {
			listener.exitOperatorPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitOperatorPower) {
			return visitor.visitOperatorPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(luaxParser.INT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(luaxParser.HEX, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(luaxParser.FLOAT, 0); }
	public HEX_FLOAT(): TerminalNode | undefined { return this.tryGetToken(luaxParser.HEX_FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_number; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public NORMALSTRING(): TerminalNode | undefined { return this.tryGetToken(luaxParser.NORMALSTRING, 0); }
	public CHARSTRING(): TerminalNode | undefined { return this.tryGetToken(luaxParser.CHARSTRING, 0); }
	public LONGSTRING(): TerminalNode | undefined { return this.tryGetToken(luaxParser.LONGSTRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return luaxParser.RULE_string; }
	// @Override
	public enterRule(listener: luaxListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: luaxListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: luaxVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


