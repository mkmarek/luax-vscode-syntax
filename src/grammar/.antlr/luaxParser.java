// Generated from c:\Projects\luax-language-support\src\grammar\luax.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class luaxParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, T__51=52, 
		T__52=53, T__53=54, T__54=55, T__55=56, T__56=57, T__57=58, NAME=59, NORMALSTRING=60, 
		CHARSTRING=61, LONGSTRING=62, INT=63, HEX=64, FLOAT=65, HEX_FLOAT=66, 
		COMMENT=67, LINE_COMMENT=68, WS=69, SHEBANG=70;
	public static final int
		RULE_chunk = 0, RULE_block = 1, RULE_stat = 2, RULE_retstat = 3, RULE_label = 4, 
		RULE_funcname = 5, RULE_varlist = 6, RULE_namelist = 7, RULE_explist = 8, 
		RULE_exp = 9, RULE_element = 10, RULE_elementName = 11, RULE_elementTerminator = 12, 
		RULE_elementChildren = 13, RULE_prefixexp = 14, RULE_functioncall = 15, 
		RULE_varOrExp = 16, RULE_var = 17, RULE_varSuffix = 18, RULE_nameAndArgs = 19, 
		RULE_args = 20, RULE_functiondef = 21, RULE_funcbody = 22, RULE_parlist = 23, 
		RULE_tableconstructor = 24, RULE_fieldlist = 25, RULE_field = 26, RULE_fieldsep = 27, 
		RULE_operatorOr = 28, RULE_operatorAnd = 29, RULE_operatorComparison = 30, 
		RULE_operatorStrcat = 31, RULE_operatorAddSub = 32, RULE_operatorMulDivMod = 33, 
		RULE_operatorBitwise = 34, RULE_operatorUnary = 35, RULE_operatorPower = 36, 
		RULE_number = 37, RULE_string = 38;
	public static final String[] ruleNames = {
		"chunk", "block", "stat", "retstat", "label", "funcname", "varlist", "namelist", 
		"explist", "exp", "element", "elementName", "elementTerminator", "elementChildren", 
		"prefixexp", "functioncall", "varOrExp", "var", "varSuffix", "nameAndArgs", 
		"args", "functiondef", "funcbody", "parlist", "tableconstructor", "fieldlist", 
		"field", "fieldsep", "operatorOr", "operatorAnd", "operatorComparison", 
		"operatorStrcat", "operatorAddSub", "operatorMulDivMod", "operatorBitwise", 
		"operatorUnary", "operatorPower", "number", "string"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "';'", "'='", "'break'", "'goto'", "'do'", "'end'", "'while'", "'repeat'", 
		"'until'", "'if'", "'then'", "'elseif'", "'else'", "'for'", "','", "'in'", 
		"'function'", "'local'", "'return'", "'::'", "'.'", "':'", "'nil'", "'false'", 
		"'true'", "'...'", "'<'", "'={'", "'}'", "'/>'", "'>'", "'</'", "'{'", 
		"'('", "')'", "'['", "']'", "'or'", "'and'", "'<='", "'>='", "'~='", "'=='", 
		"'..'", "'+'", "'-'", "'*'", "'/'", "'%'", "'//'", "'&'", "'|'", "'~'", 
		"'<<'", "'>>'", "'not'", "'#'", "'^'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, "NAME", 
		"NORMALSTRING", "CHARSTRING", "LONGSTRING", "INT", "HEX", "FLOAT", "HEX_FLOAT", 
		"COMMENT", "LINE_COMMENT", "WS", "SHEBANG"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "luax.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public luaxParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ChunkContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode EOF() { return getToken(luaxParser.EOF, 0); }
		public ChunkContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_chunk; }
	}

	public final ChunkContext chunk() throws RecognitionException {
		ChunkContext _localctx = new ChunkContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_chunk);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			block();
			setState(79);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public List<StatContext> stat() {
			return getRuleContexts(StatContext.class);
		}
		public StatContext stat(int i) {
			return getRuleContext(StatContext.class,i);
		}
		public RetstatContext retstat() {
			return getRuleContext(RetstatContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__6) | (1L << T__7) | (1L << T__9) | (1L << T__13) | (1L << T__16) | (1L << T__17) | (1L << T__19) | (1L << T__33) | (1L << NAME))) != 0)) {
				{
				{
				setState(81);
				stat();
				}
				}
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(88);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__18) {
				{
				setState(87);
				retstat();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatContext extends ParserRuleContext {
		public VarlistContext varlist() {
			return getRuleContext(VarlistContext.class,0);
		}
		public ExplistContext explist() {
			return getRuleContext(ExplistContext.class,0);
		}
		public FunctioncallContext functioncall() {
			return getRuleContext(FunctioncallContext.class,0);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public TerminalNode NAME() { return getToken(luaxParser.NAME, 0); }
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public NamelistContext namelist() {
			return getRuleContext(NamelistContext.class,0);
		}
		public FuncnameContext funcname() {
			return getRuleContext(FuncnameContext.class,0);
		}
		public FuncbodyContext funcbody() {
			return getRuleContext(FuncbodyContext.class,0);
		}
		public StatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat; }
	}

	public final StatContext stat() throws RecognitionException {
		StatContext _localctx = new StatContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_stat);
		int _la;
		try {
			setState(171);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(90);
				match(T__0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(91);
				varlist();
				setState(92);
				match(T__1);
				setState(93);
				explist();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(95);
				functioncall();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(96);
				label();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(97);
				match(T__2);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(98);
				match(T__3);
				setState(99);
				match(NAME);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(100);
				match(T__4);
				setState(101);
				block();
				setState(102);
				match(T__5);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(104);
				match(T__6);
				setState(105);
				exp(0);
				setState(106);
				match(T__4);
				setState(107);
				block();
				setState(108);
				match(T__5);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(110);
				match(T__7);
				setState(111);
				block();
				setState(112);
				match(T__8);
				setState(113);
				exp(0);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(115);
				match(T__9);
				setState(116);
				exp(0);
				setState(117);
				match(T__10);
				setState(118);
				block();
				setState(126);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__11) {
					{
					{
					setState(119);
					match(T__11);
					setState(120);
					exp(0);
					setState(121);
					match(T__10);
					setState(122);
					block();
					}
					}
					setState(128);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(131);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__12) {
					{
					setState(129);
					match(T__12);
					setState(130);
					block();
					}
				}

				setState(133);
				match(T__5);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(135);
				match(T__13);
				setState(136);
				match(NAME);
				setState(137);
				match(T__1);
				setState(138);
				exp(0);
				setState(139);
				match(T__14);
				setState(140);
				exp(0);
				setState(143);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__14) {
					{
					setState(141);
					match(T__14);
					setState(142);
					exp(0);
					}
				}

				setState(145);
				match(T__4);
				setState(146);
				block();
				setState(147);
				match(T__5);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(149);
				match(T__13);
				setState(150);
				namelist();
				setState(151);
				match(T__15);
				setState(152);
				explist();
				setState(153);
				match(T__4);
				setState(154);
				block();
				setState(155);
				match(T__5);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(157);
				match(T__16);
				setState(158);
				funcname();
				setState(159);
				funcbody();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(161);
				match(T__17);
				setState(162);
				match(T__16);
				setState(163);
				match(NAME);
				setState(164);
				funcbody();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(165);
				match(T__17);
				setState(166);
				namelist();
				setState(169);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__1) {
					{
					setState(167);
					match(T__1);
					setState(168);
					explist();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RetstatContext extends ParserRuleContext {
		public ExplistContext explist() {
			return getRuleContext(ExplistContext.class,0);
		}
		public RetstatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_retstat; }
	}

	public final RetstatContext retstat() throws RecognitionException {
		RetstatContext _localctx = new RetstatContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_retstat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			match(T__18);
			setState(175);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 17)) & ~0x3f) == 0 && ((1L << (_la - 17)) & ((1L << (T__16 - 17)) | (1L << (T__22 - 17)) | (1L << (T__23 - 17)) | (1L << (T__24 - 17)) | (1L << (T__25 - 17)) | (1L << (T__26 - 17)) | (1L << (T__32 - 17)) | (1L << (T__33 - 17)) | (1L << (T__45 - 17)) | (1L << (T__52 - 17)) | (1L << (T__55 - 17)) | (1L << (T__56 - 17)) | (1L << (NAME - 17)) | (1L << (NORMALSTRING - 17)) | (1L << (CHARSTRING - 17)) | (1L << (LONGSTRING - 17)) | (1L << (INT - 17)) | (1L << (HEX - 17)) | (1L << (FLOAT - 17)) | (1L << (HEX_FLOAT - 17)))) != 0)) {
				{
				setState(174);
				explist();
				}
			}

			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(177);
				match(T__0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabelContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(luaxParser.NAME, 0); }
		public LabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_label; }
	}

	public final LabelContext label() throws RecognitionException {
		LabelContext _localctx = new LabelContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_label);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180);
			match(T__19);
			setState(181);
			match(NAME);
			setState(182);
			match(T__19);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FuncnameContext extends ParserRuleContext {
		public List<TerminalNode> NAME() { return getTokens(luaxParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(luaxParser.NAME, i);
		}
		public FuncnameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcname; }
	}

	public final FuncnameContext funcname() throws RecognitionException {
		FuncnameContext _localctx = new FuncnameContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_funcname);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(NAME);
			setState(189);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__20) {
				{
				{
				setState(185);
				match(T__20);
				setState(186);
				match(NAME);
				}
				}
				setState(191);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(194);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(192);
				match(T__21);
				setState(193);
				match(NAME);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarlistContext extends ParserRuleContext {
		public List<VarContext> var() {
			return getRuleContexts(VarContext.class);
		}
		public VarContext var(int i) {
			return getRuleContext(VarContext.class,i);
		}
		public VarlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varlist; }
	}

	public final VarlistContext varlist() throws RecognitionException {
		VarlistContext _localctx = new VarlistContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_varlist);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			var();
			setState(201);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__14) {
				{
				{
				setState(197);
				match(T__14);
				setState(198);
				var();
				}
				}
				setState(203);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NamelistContext extends ParserRuleContext {
		public List<TerminalNode> NAME() { return getTokens(luaxParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(luaxParser.NAME, i);
		}
		public NamelistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_namelist; }
	}

	public final NamelistContext namelist() throws RecognitionException {
		NamelistContext _localctx = new NamelistContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_namelist);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			match(NAME);
			setState(209);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(205);
					match(T__14);
					setState(206);
					match(NAME);
					}
					} 
				}
				setState(211);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExplistContext extends ParserRuleContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public ExplistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_explist; }
	}

	public final ExplistContext explist() throws RecognitionException {
		ExplistContext _localctx = new ExplistContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_explist);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			exp(0);
			setState(217);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__14) {
				{
				{
				setState(213);
				match(T__14);
				setState(214);
				exp(0);
				}
				}
				setState(219);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpContext extends ParserRuleContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public FunctiondefContext functiondef() {
			return getRuleContext(FunctiondefContext.class,0);
		}
		public PrefixexpContext prefixexp() {
			return getRuleContext(PrefixexpContext.class,0);
		}
		public TableconstructorContext tableconstructor() {
			return getRuleContext(TableconstructorContext.class,0);
		}
		public OperatorUnaryContext operatorUnary() {
			return getRuleContext(OperatorUnaryContext.class,0);
		}
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public ElementContext element() {
			return getRuleContext(ElementContext.class,0);
		}
		public OperatorPowerContext operatorPower() {
			return getRuleContext(OperatorPowerContext.class,0);
		}
		public OperatorMulDivModContext operatorMulDivMod() {
			return getRuleContext(OperatorMulDivModContext.class,0);
		}
		public OperatorAddSubContext operatorAddSub() {
			return getRuleContext(OperatorAddSubContext.class,0);
		}
		public OperatorStrcatContext operatorStrcat() {
			return getRuleContext(OperatorStrcatContext.class,0);
		}
		public OperatorComparisonContext operatorComparison() {
			return getRuleContext(OperatorComparisonContext.class,0);
		}
		public OperatorAndContext operatorAnd() {
			return getRuleContext(OperatorAndContext.class,0);
		}
		public OperatorOrContext operatorOr() {
			return getRuleContext(OperatorOrContext.class,0);
		}
		public OperatorBitwiseContext operatorBitwise() {
			return getRuleContext(OperatorBitwiseContext.class,0);
		}
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	}

	public final ExpContext exp() throws RecognitionException {
		return exp(0);
	}

	private ExpContext exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpContext _localctx = new ExpContext(_ctx, _parentState);
		ExpContext _prevctx = _localctx;
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_exp, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__22:
				{
				setState(221);
				match(T__22);
				}
				break;
			case T__23:
				{
				setState(222);
				match(T__23);
				}
				break;
			case T__24:
				{
				setState(223);
				match(T__24);
				}
				break;
			case INT:
			case HEX:
			case FLOAT:
			case HEX_FLOAT:
				{
				setState(224);
				number();
				}
				break;
			case NORMALSTRING:
			case CHARSTRING:
			case LONGSTRING:
				{
				setState(225);
				string();
				}
				break;
			case T__25:
				{
				setState(226);
				match(T__25);
				}
				break;
			case T__16:
				{
				setState(227);
				functiondef();
				}
				break;
			case T__33:
			case NAME:
				{
				setState(228);
				prefixexp();
				}
				break;
			case T__32:
				{
				setState(229);
				tableconstructor();
				}
				break;
			case T__45:
			case T__52:
			case T__55:
			case T__56:
				{
				setState(230);
				operatorUnary();
				setState(231);
				exp(9);
				}
				break;
			case T__26:
				{
				setState(233);
				element();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(270);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(268);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
					case 1:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(236);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(237);
						operatorPower();
						setState(238);
						exp(10);
						}
						break;
					case 2:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(240);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(241);
						operatorMulDivMod();
						setState(242);
						exp(9);
						}
						break;
					case 3:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(244);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(245);
						operatorAddSub();
						setState(246);
						exp(8);
						}
						break;
					case 4:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(248);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(249);
						operatorStrcat();
						setState(250);
						exp(6);
						}
						break;
					case 5:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(252);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(253);
						operatorComparison();
						setState(254);
						exp(6);
						}
						break;
					case 6:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(256);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(257);
						operatorAnd();
						setState(258);
						exp(5);
						}
						break;
					case 7:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(260);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(261);
						operatorOr();
						setState(262);
						exp(4);
						}
						break;
					case 8:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(264);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(265);
						operatorBitwise();
						setState(266);
						exp(3);
						}
						break;
					}
					} 
				}
				setState(272);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ElementContext extends ParserRuleContext {
		public ElementNameContext elementName() {
			return getRuleContext(ElementNameContext.class,0);
		}
		public ElementTerminatorContext elementTerminator() {
			return getRuleContext(ElementTerminatorContext.class,0);
		}
		public List<TerminalNode> NAME() { return getTokens(luaxParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(luaxParser.NAME, i);
		}
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_element);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
			match(T__26);
			setState(274);
			elementName();
			setState(282);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(275);
				match(NAME);
				setState(276);
				match(T__27);
				setState(277);
				exp(0);
				setState(278);
				match(T__28);
				}
				}
				setState(284);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(285);
			elementTerminator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementNameContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(luaxParser.NAME, 0); }
		public ElementNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementName; }
	}

	public final ElementNameContext elementName() throws RecognitionException {
		ElementNameContext _localctx = new ElementNameContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_elementName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(287);
			match(NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementTerminatorContext extends ParserRuleContext {
		public ElementChildrenContext elementChildren() {
			return getRuleContext(ElementChildrenContext.class,0);
		}
		public TerminalNode NAME() { return getToken(luaxParser.NAME, 0); }
		public ElementTerminatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementTerminator; }
	}

	public final ElementTerminatorContext elementTerminator() throws RecognitionException {
		ElementTerminatorContext _localctx = new ElementTerminatorContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_elementTerminator);
		try {
			setState(296);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__29:
				enterOuterAlt(_localctx, 1);
				{
				setState(289);
				match(T__29);
				}
				break;
			case T__30:
				enterOuterAlt(_localctx, 2);
				{
				setState(290);
				match(T__30);
				setState(291);
				elementChildren();
				setState(292);
				match(T__31);
				setState(293);
				match(NAME);
				setState(294);
				match(T__30);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementChildrenContext extends ParserRuleContext {
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public List<FunctioncallContext> functioncall() {
			return getRuleContexts(FunctioncallContext.class);
		}
		public FunctioncallContext functioncall(int i) {
			return getRuleContext(FunctioncallContext.class,i);
		}
		public ElementChildrenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementChildren; }
	}

	public final ElementChildrenContext elementChildren() throws RecognitionException {
		ElementChildrenContext _localctx = new ElementChildrenContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_elementChildren);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__26 || _la==T__32) {
				{
				setState(303);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__26:
					{
					setState(298);
					element();
					}
					break;
				case T__32:
					{
					setState(299);
					match(T__32);
					setState(300);
					functioncall();
					setState(301);
					match(T__28);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(307);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrefixexpContext extends ParserRuleContext {
		public VarOrExpContext varOrExp() {
			return getRuleContext(VarOrExpContext.class,0);
		}
		public List<NameAndArgsContext> nameAndArgs() {
			return getRuleContexts(NameAndArgsContext.class);
		}
		public NameAndArgsContext nameAndArgs(int i) {
			return getRuleContext(NameAndArgsContext.class,i);
		}
		public PrefixexpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prefixexp; }
	}

	public final PrefixexpContext prefixexp() throws RecognitionException {
		PrefixexpContext _localctx = new PrefixexpContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_prefixexp);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(308);
			varOrExp();
			setState(312);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(309);
					nameAndArgs();
					}
					} 
				}
				setState(314);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctioncallContext extends ParserRuleContext {
		public VarOrExpContext varOrExp() {
			return getRuleContext(VarOrExpContext.class,0);
		}
		public List<NameAndArgsContext> nameAndArgs() {
			return getRuleContexts(NameAndArgsContext.class);
		}
		public NameAndArgsContext nameAndArgs(int i) {
			return getRuleContext(NameAndArgsContext.class,i);
		}
		public FunctioncallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functioncall; }
	}

	public final FunctioncallContext functioncall() throws RecognitionException {
		FunctioncallContext _localctx = new FunctioncallContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_functioncall);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
			varOrExp();
			setState(317); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(316);
					nameAndArgs();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(319); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarOrExpContext extends ParserRuleContext {
		public VarContext var() {
			return getRuleContext(VarContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public VarOrExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varOrExp; }
	}

	public final VarOrExpContext varOrExp() throws RecognitionException {
		VarOrExpContext _localctx = new VarOrExpContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_varOrExp);
		try {
			setState(326);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(321);
				var();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(322);
				match(T__33);
				setState(323);
				exp(0);
				setState(324);
				match(T__34);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(luaxParser.NAME, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public List<VarSuffixContext> varSuffix() {
			return getRuleContexts(VarSuffixContext.class);
		}
		public VarSuffixContext varSuffix(int i) {
			return getRuleContext(VarSuffixContext.class,i);
		}
		public VarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var; }
	}

	public final VarContext var() throws RecognitionException {
		VarContext _localctx = new VarContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_var);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(334);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				{
				setState(328);
				match(NAME);
				}
				break;
			case T__33:
				{
				setState(329);
				match(T__33);
				setState(330);
				exp(0);
				setState(331);
				match(T__34);
				setState(332);
				varSuffix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(339);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(336);
					varSuffix();
					}
					} 
				}
				setState(341);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarSuffixContext extends ParserRuleContext {
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode NAME() { return getToken(luaxParser.NAME, 0); }
		public List<NameAndArgsContext> nameAndArgs() {
			return getRuleContexts(NameAndArgsContext.class);
		}
		public NameAndArgsContext nameAndArgs(int i) {
			return getRuleContext(NameAndArgsContext.class,i);
		}
		public VarSuffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varSuffix; }
	}

	public final VarSuffixContext varSuffix() throws RecognitionException {
		VarSuffixContext _localctx = new VarSuffixContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_varSuffix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(345);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__21) | (1L << T__32) | (1L << T__33) | (1L << NORMALSTRING) | (1L << CHARSTRING) | (1L << LONGSTRING))) != 0)) {
				{
				{
				setState(342);
				nameAndArgs();
				}
				}
				setState(347);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(354);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__35:
				{
				setState(348);
				match(T__35);
				setState(349);
				exp(0);
				setState(350);
				match(T__36);
				}
				break;
			case T__20:
				{
				setState(352);
				match(T__20);
				setState(353);
				match(NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameAndArgsContext extends ParserRuleContext {
		public ArgsContext args() {
			return getRuleContext(ArgsContext.class,0);
		}
		public TerminalNode NAME() { return getToken(luaxParser.NAME, 0); }
		public NameAndArgsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nameAndArgs; }
	}

	public final NameAndArgsContext nameAndArgs() throws RecognitionException {
		NameAndArgsContext _localctx = new NameAndArgsContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_nameAndArgs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(356);
				match(T__21);
				setState(357);
				match(NAME);
				}
			}

			setState(360);
			args();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgsContext extends ParserRuleContext {
		public ExplistContext explist() {
			return getRuleContext(ExplistContext.class,0);
		}
		public TableconstructorContext tableconstructor() {
			return getRuleContext(TableconstructorContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public ArgsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_args; }
	}

	public final ArgsContext args() throws RecognitionException {
		ArgsContext _localctx = new ArgsContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_args);
		int _la;
		try {
			setState(369);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__33:
				enterOuterAlt(_localctx, 1);
				{
				setState(362);
				match(T__33);
				setState(364);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 17)) & ~0x3f) == 0 && ((1L << (_la - 17)) & ((1L << (T__16 - 17)) | (1L << (T__22 - 17)) | (1L << (T__23 - 17)) | (1L << (T__24 - 17)) | (1L << (T__25 - 17)) | (1L << (T__26 - 17)) | (1L << (T__32 - 17)) | (1L << (T__33 - 17)) | (1L << (T__45 - 17)) | (1L << (T__52 - 17)) | (1L << (T__55 - 17)) | (1L << (T__56 - 17)) | (1L << (NAME - 17)) | (1L << (NORMALSTRING - 17)) | (1L << (CHARSTRING - 17)) | (1L << (LONGSTRING - 17)) | (1L << (INT - 17)) | (1L << (HEX - 17)) | (1L << (FLOAT - 17)) | (1L << (HEX_FLOAT - 17)))) != 0)) {
					{
					setState(363);
					explist();
					}
				}

				setState(366);
				match(T__34);
				}
				break;
			case T__32:
				enterOuterAlt(_localctx, 2);
				{
				setState(367);
				tableconstructor();
				}
				break;
			case NORMALSTRING:
			case CHARSTRING:
			case LONGSTRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(368);
				string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctiondefContext extends ParserRuleContext {
		public FuncbodyContext funcbody() {
			return getRuleContext(FuncbodyContext.class,0);
		}
		public FunctiondefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functiondef; }
	}

	public final FunctiondefContext functiondef() throws RecognitionException {
		FunctiondefContext _localctx = new FunctiondefContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_functiondef);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(371);
			match(T__16);
			setState(372);
			funcbody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FuncbodyContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ParlistContext parlist() {
			return getRuleContext(ParlistContext.class,0);
		}
		public FuncbodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcbody; }
	}

	public final FuncbodyContext funcbody() throws RecognitionException {
		FuncbodyContext _localctx = new FuncbodyContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_funcbody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			match(T__33);
			setState(376);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__25 || _la==NAME) {
				{
				setState(375);
				parlist();
				}
			}

			setState(378);
			match(T__34);
			setState(379);
			block();
			setState(380);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParlistContext extends ParserRuleContext {
		public NamelistContext namelist() {
			return getRuleContext(NamelistContext.class,0);
		}
		public ParlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parlist; }
	}

	public final ParlistContext parlist() throws RecognitionException {
		ParlistContext _localctx = new ParlistContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_parlist);
		int _la;
		try {
			setState(388);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(382);
				namelist();
				setState(385);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__14) {
					{
					setState(383);
					match(T__14);
					setState(384);
					match(T__25);
					}
				}

				}
				break;
			case T__25:
				enterOuterAlt(_localctx, 2);
				{
				setState(387);
				match(T__25);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TableconstructorContext extends ParserRuleContext {
		public FieldlistContext fieldlist() {
			return getRuleContext(FieldlistContext.class,0);
		}
		public TableconstructorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tableconstructor; }
	}

	public final TableconstructorContext tableconstructor() throws RecognitionException {
		TableconstructorContext _localctx = new TableconstructorContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_tableconstructor);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(390);
			match(T__32);
			setState(392);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 17)) & ~0x3f) == 0 && ((1L << (_la - 17)) & ((1L << (T__16 - 17)) | (1L << (T__22 - 17)) | (1L << (T__23 - 17)) | (1L << (T__24 - 17)) | (1L << (T__25 - 17)) | (1L << (T__26 - 17)) | (1L << (T__32 - 17)) | (1L << (T__33 - 17)) | (1L << (T__35 - 17)) | (1L << (T__45 - 17)) | (1L << (T__52 - 17)) | (1L << (T__55 - 17)) | (1L << (T__56 - 17)) | (1L << (NAME - 17)) | (1L << (NORMALSTRING - 17)) | (1L << (CHARSTRING - 17)) | (1L << (LONGSTRING - 17)) | (1L << (INT - 17)) | (1L << (HEX - 17)) | (1L << (FLOAT - 17)) | (1L << (HEX_FLOAT - 17)))) != 0)) {
				{
				setState(391);
				fieldlist();
				}
			}

			setState(394);
			match(T__28);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldlistContext extends ParserRuleContext {
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public List<FieldsepContext> fieldsep() {
			return getRuleContexts(FieldsepContext.class);
		}
		public FieldsepContext fieldsep(int i) {
			return getRuleContext(FieldsepContext.class,i);
		}
		public FieldlistContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldlist; }
	}

	public final FieldlistContext fieldlist() throws RecognitionException {
		FieldlistContext _localctx = new FieldlistContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_fieldlist);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(396);
			field();
			setState(402);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(397);
					fieldsep();
					setState(398);
					field();
					}
					} 
				}
				setState(404);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			}
			setState(406);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0 || _la==T__14) {
				{
				setState(405);
				fieldsep();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldContext extends ParserRuleContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode NAME() { return getToken(luaxParser.NAME, 0); }
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_field);
		try {
			setState(418);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(408);
				match(T__35);
				setState(409);
				exp(0);
				setState(410);
				match(T__36);
				setState(411);
				match(T__1);
				setState(412);
				exp(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(414);
				match(NAME);
				setState(415);
				match(T__1);
				setState(416);
				exp(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(417);
				exp(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldsepContext extends ParserRuleContext {
		public FieldsepContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldsep; }
	}

	public final FieldsepContext fieldsep() throws RecognitionException {
		FieldsepContext _localctx = new FieldsepContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_fieldsep);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(420);
			_la = _input.LA(1);
			if ( !(_la==T__0 || _la==T__14) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorOrContext extends ParserRuleContext {
		public OperatorOrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorOr; }
	}

	public final OperatorOrContext operatorOr() throws RecognitionException {
		OperatorOrContext _localctx = new OperatorOrContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_operatorOr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(422);
			match(T__37);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorAndContext extends ParserRuleContext {
		public OperatorAndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorAnd; }
	}

	public final OperatorAndContext operatorAnd() throws RecognitionException {
		OperatorAndContext _localctx = new OperatorAndContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_operatorAnd);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(424);
			match(T__38);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorComparisonContext extends ParserRuleContext {
		public OperatorComparisonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorComparison; }
	}

	public final OperatorComparisonContext operatorComparison() throws RecognitionException {
		OperatorComparisonContext _localctx = new OperatorComparisonContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_operatorComparison);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(426);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__26) | (1L << T__30) | (1L << T__39) | (1L << T__40) | (1L << T__41) | (1L << T__42))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorStrcatContext extends ParserRuleContext {
		public OperatorStrcatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorStrcat; }
	}

	public final OperatorStrcatContext operatorStrcat() throws RecognitionException {
		OperatorStrcatContext _localctx = new OperatorStrcatContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_operatorStrcat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
			match(T__43);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorAddSubContext extends ParserRuleContext {
		public OperatorAddSubContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorAddSub; }
	}

	public final OperatorAddSubContext operatorAddSub() throws RecognitionException {
		OperatorAddSubContext _localctx = new OperatorAddSubContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_operatorAddSub);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(430);
			_la = _input.LA(1);
			if ( !(_la==T__44 || _la==T__45) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorMulDivModContext extends ParserRuleContext {
		public OperatorMulDivModContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorMulDivMod; }
	}

	public final OperatorMulDivModContext operatorMulDivMod() throws RecognitionException {
		OperatorMulDivModContext _localctx = new OperatorMulDivModContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_operatorMulDivMod);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(432);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__46) | (1L << T__47) | (1L << T__48) | (1L << T__49))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorBitwiseContext extends ParserRuleContext {
		public OperatorBitwiseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorBitwise; }
	}

	public final OperatorBitwiseContext operatorBitwise() throws RecognitionException {
		OperatorBitwiseContext _localctx = new OperatorBitwiseContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_operatorBitwise);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__50) | (1L << T__51) | (1L << T__52) | (1L << T__53) | (1L << T__54))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorUnaryContext extends ParserRuleContext {
		public OperatorUnaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorUnary; }
	}

	public final OperatorUnaryContext operatorUnary() throws RecognitionException {
		OperatorUnaryContext _localctx = new OperatorUnaryContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_operatorUnary);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__45) | (1L << T__52) | (1L << T__55) | (1L << T__56))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorPowerContext extends ParserRuleContext {
		public OperatorPowerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorPower; }
	}

	public final OperatorPowerContext operatorPower() throws RecognitionException {
		OperatorPowerContext _localctx = new OperatorPowerContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_operatorPower);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(438);
			match(T__57);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(luaxParser.INT, 0); }
		public TerminalNode HEX() { return getToken(luaxParser.HEX, 0); }
		public TerminalNode FLOAT() { return getToken(luaxParser.FLOAT, 0); }
		public TerminalNode HEX_FLOAT() { return getToken(luaxParser.HEX_FLOAT, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
			_la = _input.LA(1);
			if ( !(((((_la - 63)) & ~0x3f) == 0 && ((1L << (_la - 63)) & ((1L << (INT - 63)) | (1L << (HEX - 63)) | (1L << (FLOAT - 63)) | (1L << (HEX_FLOAT - 63)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringContext extends ParserRuleContext {
		public TerminalNode NORMALSTRING() { return getToken(luaxParser.NORMALSTRING, 0); }
		public TerminalNode CHARSTRING() { return getToken(luaxParser.CHARSTRING, 0); }
		public TerminalNode LONGSTRING() { return getToken(luaxParser.LONGSTRING, 0); }
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_string);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(442);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NORMALSTRING) | (1L << CHARSTRING) | (1L << LONGSTRING))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 9:
			return exp_sempred((ExpContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean exp_sempred(ExpContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 10);
		case 1:
			return precpred(_ctx, 8);
		case 2:
			return precpred(_ctx, 7);
		case 3:
			return precpred(_ctx, 6);
		case 4:
			return precpred(_ctx, 5);
		case 5:
			return precpred(_ctx, 4);
		case 6:
			return precpred(_ctx, 3);
		case 7:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3H\u01bf\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\3\2\3\2\3\2\3\3\7\3"+
		"U\n\3\f\3\16\3X\13\3\3\3\5\3[\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\7\4\177\n\4\f\4\16\4\u0082\13\4\3\4\3\4"+
		"\5\4\u0086\n\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\u0092\n\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\5\4\u00ac\n\4\5\4\u00ae\n\4\3\5\3\5\5\5\u00b2"+
		"\n\5\3\5\5\5\u00b5\n\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\7\7\u00be\n\7\f\7\16"+
		"\7\u00c1\13\7\3\7\3\7\5\7\u00c5\n\7\3\b\3\b\3\b\7\b\u00ca\n\b\f\b\16\b"+
		"\u00cd\13\b\3\t\3\t\3\t\7\t\u00d2\n\t\f\t\16\t\u00d5\13\t\3\n\3\n\3\n"+
		"\7\n\u00da\n\n\f\n\16\n\u00dd\13\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u00ed\n\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\7\13\u010f\n\13\f\13\16\13\u0112\13\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\7"+
		"\f\u011b\n\f\f\f\16\f\u011e\13\f\3\f\3\f\3\r\3\r\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\3\16\5\16\u012b\n\16\3\17\3\17\3\17\3\17\3\17\7\17\u0132\n\17"+
		"\f\17\16\17\u0135\13\17\3\20\3\20\7\20\u0139\n\20\f\20\16\20\u013c\13"+
		"\20\3\21\3\21\6\21\u0140\n\21\r\21\16\21\u0141\3\22\3\22\3\22\3\22\3\22"+
		"\5\22\u0149\n\22\3\23\3\23\3\23\3\23\3\23\3\23\5\23\u0151\n\23\3\23\7"+
		"\23\u0154\n\23\f\23\16\23\u0157\13\23\3\24\7\24\u015a\n\24\f\24\16\24"+
		"\u015d\13\24\3\24\3\24\3\24\3\24\3\24\3\24\5\24\u0165\n\24\3\25\3\25\5"+
		"\25\u0169\n\25\3\25\3\25\3\26\3\26\5\26\u016f\n\26\3\26\3\26\3\26\5\26"+
		"\u0174\n\26\3\27\3\27\3\27\3\30\3\30\5\30\u017b\n\30\3\30\3\30\3\30\3"+
		"\30\3\31\3\31\3\31\5\31\u0184\n\31\3\31\5\31\u0187\n\31\3\32\3\32\5\32"+
		"\u018b\n\32\3\32\3\32\3\33\3\33\3\33\3\33\7\33\u0193\n\33\f\33\16\33\u0196"+
		"\13\33\3\33\5\33\u0199\n\33\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3"+
		"\34\3\34\5\34\u01a5\n\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\""+
		"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3(\2\3\24)\2\4\6\b\n\f\16\20"+
		"\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLN\2\n\4\2\3\3\21"+
		"\21\5\2\35\35!!*-\3\2/\60\3\2\61\64\3\2\659\5\2\60\60\67\67:;\3\2AD\3"+
		"\2>@\2\u01db\2P\3\2\2\2\4V\3\2\2\2\6\u00ad\3\2\2\2\b\u00af\3\2\2\2\n\u00b6"+
		"\3\2\2\2\f\u00ba\3\2\2\2\16\u00c6\3\2\2\2\20\u00ce\3\2\2\2\22\u00d6\3"+
		"\2\2\2\24\u00ec\3\2\2\2\26\u0113\3\2\2\2\30\u0121\3\2\2\2\32\u012a\3\2"+
		"\2\2\34\u0133\3\2\2\2\36\u0136\3\2\2\2 \u013d\3\2\2\2\"\u0148\3\2\2\2"+
		"$\u0150\3\2\2\2&\u015b\3\2\2\2(\u0168\3\2\2\2*\u0173\3\2\2\2,\u0175\3"+
		"\2\2\2.\u0178\3\2\2\2\60\u0186\3\2\2\2\62\u0188\3\2\2\2\64\u018e\3\2\2"+
		"\2\66\u01a4\3\2\2\28\u01a6\3\2\2\2:\u01a8\3\2\2\2<\u01aa\3\2\2\2>\u01ac"+
		"\3\2\2\2@\u01ae\3\2\2\2B\u01b0\3\2\2\2D\u01b2\3\2\2\2F\u01b4\3\2\2\2H"+
		"\u01b6\3\2\2\2J\u01b8\3\2\2\2L\u01ba\3\2\2\2N\u01bc\3\2\2\2PQ\5\4\3\2"+
		"QR\7\2\2\3R\3\3\2\2\2SU\5\6\4\2TS\3\2\2\2UX\3\2\2\2VT\3\2\2\2VW\3\2\2"+
		"\2WZ\3\2\2\2XV\3\2\2\2Y[\5\b\5\2ZY\3\2\2\2Z[\3\2\2\2[\5\3\2\2\2\\\u00ae"+
		"\7\3\2\2]^\5\16\b\2^_\7\4\2\2_`\5\22\n\2`\u00ae\3\2\2\2a\u00ae\5 \21\2"+
		"b\u00ae\5\n\6\2c\u00ae\7\5\2\2de\7\6\2\2e\u00ae\7=\2\2fg\7\7\2\2gh\5\4"+
		"\3\2hi\7\b\2\2i\u00ae\3\2\2\2jk\7\t\2\2kl\5\24\13\2lm\7\7\2\2mn\5\4\3"+
		"\2no\7\b\2\2o\u00ae\3\2\2\2pq\7\n\2\2qr\5\4\3\2rs\7\13\2\2st\5\24\13\2"+
		"t\u00ae\3\2\2\2uv\7\f\2\2vw\5\24\13\2wx\7\r\2\2x\u0080\5\4\3\2yz\7\16"+
		"\2\2z{\5\24\13\2{|\7\r\2\2|}\5\4\3\2}\177\3\2\2\2~y\3\2\2\2\177\u0082"+
		"\3\2\2\2\u0080~\3\2\2\2\u0080\u0081\3\2\2\2\u0081\u0085\3\2\2\2\u0082"+
		"\u0080\3\2\2\2\u0083\u0084\7\17\2\2\u0084\u0086\5\4\3\2\u0085\u0083\3"+
		"\2\2\2\u0085\u0086\3\2\2\2\u0086\u0087\3\2\2\2\u0087\u0088\7\b\2\2\u0088"+
		"\u00ae\3\2\2\2\u0089\u008a\7\20\2\2\u008a\u008b\7=\2\2\u008b\u008c\7\4"+
		"\2\2\u008c\u008d\5\24\13\2\u008d\u008e\7\21\2\2\u008e\u0091\5\24\13\2"+
		"\u008f\u0090\7\21\2\2\u0090\u0092\5\24\13\2\u0091\u008f\3\2\2\2\u0091"+
		"\u0092\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0094\7\7\2\2\u0094\u0095\5\4"+
		"\3\2\u0095\u0096\7\b\2\2\u0096\u00ae\3\2\2\2\u0097\u0098\7\20\2\2\u0098"+
		"\u0099\5\20\t\2\u0099\u009a\7\22\2\2\u009a\u009b\5\22\n\2\u009b\u009c"+
		"\7\7\2\2\u009c\u009d\5\4\3\2\u009d\u009e\7\b\2\2\u009e\u00ae\3\2\2\2\u009f"+
		"\u00a0\7\23\2\2\u00a0\u00a1\5\f\7\2\u00a1\u00a2\5.\30\2\u00a2\u00ae\3"+
		"\2\2\2\u00a3\u00a4\7\24\2\2\u00a4\u00a5\7\23\2\2\u00a5\u00a6\7=\2\2\u00a6"+
		"\u00ae\5.\30\2\u00a7\u00a8\7\24\2\2\u00a8\u00ab\5\20\t\2\u00a9\u00aa\7"+
		"\4\2\2\u00aa\u00ac\5\22\n\2\u00ab\u00a9\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac"+
		"\u00ae\3\2\2\2\u00ad\\\3\2\2\2\u00ad]\3\2\2\2\u00ada\3\2\2\2\u00adb\3"+
		"\2\2\2\u00adc\3\2\2\2\u00add\3\2\2\2\u00adf\3\2\2\2\u00adj\3\2\2\2\u00ad"+
		"p\3\2\2\2\u00adu\3\2\2\2\u00ad\u0089\3\2\2\2\u00ad\u0097\3\2\2\2\u00ad"+
		"\u009f\3\2\2\2\u00ad\u00a3\3\2\2\2\u00ad\u00a7\3\2\2\2\u00ae\7\3\2\2\2"+
		"\u00af\u00b1\7\25\2\2\u00b0\u00b2\5\22\n\2\u00b1\u00b0\3\2\2\2\u00b1\u00b2"+
		"\3\2\2\2\u00b2\u00b4\3\2\2\2\u00b3\u00b5\7\3\2\2\u00b4\u00b3\3\2\2\2\u00b4"+
		"\u00b5\3\2\2\2\u00b5\t\3\2\2\2\u00b6\u00b7\7\26\2\2\u00b7\u00b8\7=\2\2"+
		"\u00b8\u00b9\7\26\2\2\u00b9\13\3\2\2\2\u00ba\u00bf\7=\2\2\u00bb\u00bc"+
		"\7\27\2\2\u00bc\u00be\7=\2\2\u00bd\u00bb\3\2\2\2\u00be\u00c1\3\2\2\2\u00bf"+
		"\u00bd\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0\u00c4\3\2\2\2\u00c1\u00bf\3\2"+
		"\2\2\u00c2\u00c3\7\30\2\2\u00c3\u00c5\7=\2\2\u00c4\u00c2\3\2\2\2\u00c4"+
		"\u00c5\3\2\2\2\u00c5\r\3\2\2\2\u00c6\u00cb\5$\23\2\u00c7\u00c8\7\21\2"+
		"\2\u00c8\u00ca\5$\23\2\u00c9\u00c7\3\2\2\2\u00ca\u00cd\3\2\2\2\u00cb\u00c9"+
		"\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc\17\3\2\2\2\u00cd\u00cb\3\2\2\2\u00ce"+
		"\u00d3\7=\2\2\u00cf\u00d0\7\21\2\2\u00d0\u00d2\7=\2\2\u00d1\u00cf\3\2"+
		"\2\2\u00d2\u00d5\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4"+
		"\21\3\2\2\2\u00d5\u00d3\3\2\2\2\u00d6\u00db\5\24\13\2\u00d7\u00d8\7\21"+
		"\2\2\u00d8\u00da\5\24\13\2\u00d9\u00d7\3\2\2\2\u00da\u00dd\3\2\2\2\u00db"+
		"\u00d9\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc\23\3\2\2\2\u00dd\u00db\3\2\2"+
		"\2\u00de\u00df\b\13\1\2\u00df\u00ed\7\31\2\2\u00e0\u00ed\7\32\2\2\u00e1"+
		"\u00ed\7\33\2\2\u00e2\u00ed\5L\'\2\u00e3\u00ed\5N(\2\u00e4\u00ed\7\34"+
		"\2\2\u00e5\u00ed\5,\27\2\u00e6\u00ed\5\36\20\2\u00e7\u00ed\5\62\32\2\u00e8"+
		"\u00e9\5H%\2\u00e9\u00ea\5\24\13\13\u00ea\u00ed\3\2\2\2\u00eb\u00ed\5"+
		"\26\f\2\u00ec\u00de\3\2\2\2\u00ec\u00e0\3\2\2\2\u00ec\u00e1\3\2\2\2\u00ec"+
		"\u00e2\3\2\2\2\u00ec\u00e3\3\2\2\2\u00ec\u00e4\3\2\2\2\u00ec\u00e5\3\2"+
		"\2\2\u00ec\u00e6\3\2\2\2\u00ec\u00e7\3\2\2\2\u00ec\u00e8\3\2\2\2\u00ec"+
		"\u00eb\3\2\2\2\u00ed\u0110\3\2\2\2\u00ee\u00ef\f\f\2\2\u00ef\u00f0\5J"+
		"&\2\u00f0\u00f1\5\24\13\f\u00f1\u010f\3\2\2\2\u00f2\u00f3\f\n\2\2\u00f3"+
		"\u00f4\5D#\2\u00f4\u00f5\5\24\13\13\u00f5\u010f\3\2\2\2\u00f6\u00f7\f"+
		"\t\2\2\u00f7\u00f8\5B\"\2\u00f8\u00f9\5\24\13\n\u00f9\u010f\3\2\2\2\u00fa"+
		"\u00fb\f\b\2\2\u00fb\u00fc\5@!\2\u00fc\u00fd\5\24\13\b\u00fd\u010f\3\2"+
		"\2\2\u00fe\u00ff\f\7\2\2\u00ff\u0100\5> \2\u0100\u0101\5\24\13\b\u0101"+
		"\u010f\3\2\2\2\u0102\u0103\f\6\2\2\u0103\u0104\5<\37\2\u0104\u0105\5\24"+
		"\13\7\u0105\u010f\3\2\2\2\u0106\u0107\f\5\2\2\u0107\u0108\5:\36\2\u0108"+
		"\u0109\5\24\13\6\u0109\u010f\3\2\2\2\u010a\u010b\f\4\2\2\u010b\u010c\5"+
		"F$\2\u010c\u010d\5\24\13\5\u010d\u010f\3\2\2\2\u010e\u00ee\3\2\2\2\u010e"+
		"\u00f2\3\2\2\2\u010e\u00f6\3\2\2\2\u010e\u00fa\3\2\2\2\u010e\u00fe\3\2"+
		"\2\2\u010e\u0102\3\2\2\2\u010e\u0106\3\2\2\2\u010e\u010a\3\2\2\2\u010f"+
		"\u0112\3\2\2\2\u0110\u010e\3\2\2\2\u0110\u0111\3\2\2\2\u0111\25\3\2\2"+
		"\2\u0112\u0110\3\2\2\2\u0113\u0114\7\35\2\2\u0114\u011c\5\30\r\2\u0115"+
		"\u0116\7=\2\2\u0116\u0117\7\36\2\2\u0117\u0118\5\24\13\2\u0118\u0119\7"+
		"\37\2\2\u0119\u011b\3\2\2\2\u011a\u0115\3\2\2\2\u011b\u011e\3\2\2\2\u011c"+
		"\u011a\3\2\2\2\u011c\u011d\3\2\2\2\u011d\u011f\3\2\2\2\u011e\u011c\3\2"+
		"\2\2\u011f\u0120\5\32\16\2\u0120\27\3\2\2\2\u0121\u0122\7=\2\2\u0122\31"+
		"\3\2\2\2\u0123\u012b\7 \2\2\u0124\u0125\7!\2\2\u0125\u0126\5\34\17\2\u0126"+
		"\u0127\7\"\2\2\u0127\u0128\7=\2\2\u0128\u0129\7!\2\2\u0129\u012b\3\2\2"+
		"\2\u012a\u0123\3\2\2\2\u012a\u0124\3\2\2\2\u012b\33\3\2\2\2\u012c\u0132"+
		"\5\26\f\2\u012d\u012e\7#\2\2\u012e\u012f\5 \21\2\u012f\u0130\7\37\2\2"+
		"\u0130\u0132\3\2\2\2\u0131\u012c\3\2\2\2\u0131\u012d\3\2\2\2\u0132\u0135"+
		"\3\2\2\2\u0133\u0131\3\2\2\2\u0133\u0134\3\2\2\2\u0134\35\3\2\2\2\u0135"+
		"\u0133\3\2\2\2\u0136\u013a\5\"\22\2\u0137\u0139\5(\25\2\u0138\u0137\3"+
		"\2\2\2\u0139\u013c\3\2\2\2\u013a\u0138\3\2\2\2\u013a\u013b\3\2\2\2\u013b"+
		"\37\3\2\2\2\u013c\u013a\3\2\2\2\u013d\u013f\5\"\22\2\u013e\u0140\5(\25"+
		"\2\u013f\u013e\3\2\2\2\u0140\u0141\3\2\2\2\u0141\u013f\3\2\2\2\u0141\u0142"+
		"\3\2\2\2\u0142!\3\2\2\2\u0143\u0149\5$\23\2\u0144\u0145\7$\2\2\u0145\u0146"+
		"\5\24\13\2\u0146\u0147\7%\2\2\u0147\u0149\3\2\2\2\u0148\u0143\3\2\2\2"+
		"\u0148\u0144\3\2\2\2\u0149#\3\2\2\2\u014a\u0151\7=\2\2\u014b\u014c\7$"+
		"\2\2\u014c\u014d\5\24\13\2\u014d\u014e\7%\2\2\u014e\u014f\5&\24\2\u014f"+
		"\u0151\3\2\2\2\u0150\u014a\3\2\2\2\u0150\u014b\3\2\2\2\u0151\u0155\3\2"+
		"\2\2\u0152\u0154\5&\24\2\u0153\u0152\3\2\2\2\u0154\u0157\3\2\2\2\u0155"+
		"\u0153\3\2\2\2\u0155\u0156\3\2\2\2\u0156%\3\2\2\2\u0157\u0155\3\2\2\2"+
		"\u0158\u015a\5(\25\2\u0159\u0158\3\2\2\2\u015a\u015d\3\2\2\2\u015b\u0159"+
		"\3\2\2\2\u015b\u015c\3\2\2\2\u015c\u0164\3\2\2\2\u015d\u015b\3\2\2\2\u015e"+
		"\u015f\7&\2\2\u015f\u0160\5\24\13\2\u0160\u0161\7\'\2\2\u0161\u0165\3"+
		"\2\2\2\u0162\u0163\7\27\2\2\u0163\u0165\7=\2\2\u0164\u015e\3\2\2\2\u0164"+
		"\u0162\3\2\2\2\u0165\'\3\2\2\2\u0166\u0167\7\30\2\2\u0167\u0169\7=\2\2"+
		"\u0168\u0166\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016a\3\2\2\2\u016a\u016b"+
		"\5*\26\2\u016b)\3\2\2\2\u016c\u016e\7$\2\2\u016d\u016f\5\22\n\2\u016e"+
		"\u016d\3\2\2\2\u016e\u016f\3\2\2\2\u016f\u0170\3\2\2\2\u0170\u0174\7%"+
		"\2\2\u0171\u0174\5\62\32\2\u0172\u0174\5N(\2\u0173\u016c\3\2\2\2\u0173"+
		"\u0171\3\2\2\2\u0173\u0172\3\2\2\2\u0174+\3\2\2\2\u0175\u0176\7\23\2\2"+
		"\u0176\u0177\5.\30\2\u0177-\3\2\2\2\u0178\u017a\7$\2\2\u0179\u017b\5\60"+
		"\31\2\u017a\u0179\3\2\2\2\u017a\u017b\3\2\2\2\u017b\u017c\3\2\2\2\u017c"+
		"\u017d\7%\2\2\u017d\u017e\5\4\3\2\u017e\u017f\7\b\2\2\u017f/\3\2\2\2\u0180"+
		"\u0183\5\20\t\2\u0181\u0182\7\21\2\2\u0182\u0184\7\34\2\2\u0183\u0181"+
		"\3\2\2\2\u0183\u0184\3\2\2\2\u0184\u0187\3\2\2\2\u0185\u0187\7\34\2\2"+
		"\u0186\u0180\3\2\2\2\u0186\u0185\3\2\2\2\u0187\61\3\2\2\2\u0188\u018a"+
		"\7#\2\2\u0189\u018b\5\64\33\2\u018a\u0189\3\2\2\2\u018a\u018b\3\2\2\2"+
		"\u018b\u018c\3\2\2\2\u018c\u018d\7\37\2\2\u018d\63\3\2\2\2\u018e\u0194"+
		"\5\66\34\2\u018f\u0190\58\35\2\u0190\u0191\5\66\34\2\u0191\u0193\3\2\2"+
		"\2\u0192\u018f\3\2\2\2\u0193\u0196\3\2\2\2\u0194\u0192\3\2\2\2\u0194\u0195"+
		"\3\2\2\2\u0195\u0198\3\2\2\2\u0196\u0194\3\2\2\2\u0197\u0199\58\35\2\u0198"+
		"\u0197\3\2\2\2\u0198\u0199\3\2\2\2\u0199\65\3\2\2\2\u019a\u019b\7&\2\2"+
		"\u019b\u019c\5\24\13\2\u019c\u019d\7\'\2\2\u019d\u019e\7\4\2\2\u019e\u019f"+
		"\5\24\13\2\u019f\u01a5\3\2\2\2\u01a0\u01a1\7=\2\2\u01a1\u01a2\7\4\2\2"+
		"\u01a2\u01a5\5\24\13\2\u01a3\u01a5\5\24\13\2\u01a4\u019a\3\2\2\2\u01a4"+
		"\u01a0\3\2\2\2\u01a4\u01a3\3\2\2\2\u01a5\67\3\2\2\2\u01a6\u01a7\t\2\2"+
		"\2\u01a79\3\2\2\2\u01a8\u01a9\7(\2\2\u01a9;\3\2\2\2\u01aa\u01ab\7)\2\2"+
		"\u01ab=\3\2\2\2\u01ac\u01ad\t\3\2\2\u01ad?\3\2\2\2\u01ae\u01af\7.\2\2"+
		"\u01afA\3\2\2\2\u01b0\u01b1\t\4\2\2\u01b1C\3\2\2\2\u01b2\u01b3\t\5\2\2"+
		"\u01b3E\3\2\2\2\u01b4\u01b5\t\6\2\2\u01b5G\3\2\2\2\u01b6\u01b7\t\7\2\2"+
		"\u01b7I\3\2\2\2\u01b8\u01b9\7<\2\2\u01b9K\3\2\2\2\u01ba\u01bb\t\b\2\2"+
		"\u01bbM\3\2\2\2\u01bc\u01bd\t\t\2\2\u01bdO\3\2\2\2(VZ\u0080\u0085\u0091"+
		"\u00ab\u00ad\u00b1\u00b4\u00bf\u00c4\u00cb\u00d3\u00db\u00ec\u010e\u0110"+
		"\u011c\u012a\u0131\u0133\u013a\u0141\u0148\u0150\u0155\u015b\u0164\u0168"+
		"\u016e\u0173\u017a\u0183\u0186\u018a\u0194\u0198\u01a4";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}