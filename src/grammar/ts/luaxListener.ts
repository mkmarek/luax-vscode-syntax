// Generated from src/grammar/luax.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ChunkContext } from "./luaxParser";
import { BlockContext } from "./luaxParser";
import { StatContext } from "./luaxParser";
import { RetstatContext } from "./luaxParser";
import { LabelContext } from "./luaxParser";
import { FuncnameContext } from "./luaxParser";
import { VarlistContext } from "./luaxParser";
import { NamelistContext } from "./luaxParser";
import { ExplistContext } from "./luaxParser";
import { ExpContext } from "./luaxParser";
import { ElementContext } from "./luaxParser";
import { ElementNameContext } from "./luaxParser";
import { ElementTerminatorContext } from "./luaxParser";
import { ElementChildrenContext } from "./luaxParser";
import { PrefixexpContext } from "./luaxParser";
import { FunctioncallContext } from "./luaxParser";
import { VarOrExpContext } from "./luaxParser";
import { VarContext } from "./luaxParser";
import { VarSuffixContext } from "./luaxParser";
import { NameAndArgsContext } from "./luaxParser";
import { ArgsContext } from "./luaxParser";
import { FunctiondefContext } from "./luaxParser";
import { FuncbodyContext } from "./luaxParser";
import { ParlistContext } from "./luaxParser";
import { TableconstructorContext } from "./luaxParser";
import { FieldlistContext } from "./luaxParser";
import { FieldContext } from "./luaxParser";
import { FieldsepContext } from "./luaxParser";
import { OperatorOrContext } from "./luaxParser";
import { OperatorAndContext } from "./luaxParser";
import { OperatorComparisonContext } from "./luaxParser";
import { OperatorStrcatContext } from "./luaxParser";
import { OperatorAddSubContext } from "./luaxParser";
import { OperatorMulDivModContext } from "./luaxParser";
import { OperatorBitwiseContext } from "./luaxParser";
import { OperatorUnaryContext } from "./luaxParser";
import { OperatorPowerContext } from "./luaxParser";
import { NumberContext } from "./luaxParser";
import { StringContext } from "./luaxParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `luaxParser`.
 */
export interface luaxListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `luaxParser.chunk`.
	 * @param ctx the parse tree
	 */
	enterChunk?: (ctx: ChunkContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.chunk`.
	 * @param ctx the parse tree
	 */
	exitChunk?: (ctx: ChunkContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.retstat`.
	 * @param ctx the parse tree
	 */
	enterRetstat?: (ctx: RetstatContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.retstat`.
	 * @param ctx the parse tree
	 */
	exitRetstat?: (ctx: RetstatContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.funcname`.
	 * @param ctx the parse tree
	 */
	enterFuncname?: (ctx: FuncnameContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.funcname`.
	 * @param ctx the parse tree
	 */
	exitFuncname?: (ctx: FuncnameContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.varlist`.
	 * @param ctx the parse tree
	 */
	enterVarlist?: (ctx: VarlistContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.varlist`.
	 * @param ctx the parse tree
	 */
	exitVarlist?: (ctx: VarlistContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.namelist`.
	 * @param ctx the parse tree
	 */
	enterNamelist?: (ctx: NamelistContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.namelist`.
	 * @param ctx the parse tree
	 */
	exitNamelist?: (ctx: NamelistContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.explist`.
	 * @param ctx the parse tree
	 */
	enterExplist?: (ctx: ExplistContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.explist`.
	 * @param ctx the parse tree
	 */
	exitExplist?: (ctx: ExplistContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.elementName`.
	 * @param ctx the parse tree
	 */
	enterElementName?: (ctx: ElementNameContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.elementName`.
	 * @param ctx the parse tree
	 */
	exitElementName?: (ctx: ElementNameContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.elementTerminator`.
	 * @param ctx the parse tree
	 */
	enterElementTerminator?: (ctx: ElementTerminatorContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.elementTerminator`.
	 * @param ctx the parse tree
	 */
	exitElementTerminator?: (ctx: ElementTerminatorContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.elementChildren`.
	 * @param ctx the parse tree
	 */
	enterElementChildren?: (ctx: ElementChildrenContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.elementChildren`.
	 * @param ctx the parse tree
	 */
	exitElementChildren?: (ctx: ElementChildrenContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	enterPrefixexp?: (ctx: PrefixexpContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	exitPrefixexp?: (ctx: PrefixexpContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFunctioncall?: (ctx: FunctioncallContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFunctioncall?: (ctx: FunctioncallContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.varOrExp`.
	 * @param ctx the parse tree
	 */
	enterVarOrExp?: (ctx: VarOrExpContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.varOrExp`.
	 * @param ctx the parse tree
	 */
	exitVarOrExp?: (ctx: VarOrExpContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.varSuffix`.
	 * @param ctx the parse tree
	 */
	enterVarSuffix?: (ctx: VarSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.varSuffix`.
	 * @param ctx the parse tree
	 */
	exitVarSuffix?: (ctx: VarSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.nameAndArgs`.
	 * @param ctx the parse tree
	 */
	enterNameAndArgs?: (ctx: NameAndArgsContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.nameAndArgs`.
	 * @param ctx the parse tree
	 */
	exitNameAndArgs?: (ctx: NameAndArgsContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.functiondef`.
	 * @param ctx the parse tree
	 */
	enterFunctiondef?: (ctx: FunctiondefContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.functiondef`.
	 * @param ctx the parse tree
	 */
	exitFunctiondef?: (ctx: FunctiondefContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.funcbody`.
	 * @param ctx the parse tree
	 */
	enterFuncbody?: (ctx: FuncbodyContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.funcbody`.
	 * @param ctx the parse tree
	 */
	exitFuncbody?: (ctx: FuncbodyContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.parlist`.
	 * @param ctx the parse tree
	 */
	enterParlist?: (ctx: ParlistContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.parlist`.
	 * @param ctx the parse tree
	 */
	exitParlist?: (ctx: ParlistContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	enterTableconstructor?: (ctx: TableconstructorContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	exitTableconstructor?: (ctx: TableconstructorContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.fieldlist`.
	 * @param ctx the parse tree
	 */
	enterFieldlist?: (ctx: FieldlistContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.fieldlist`.
	 * @param ctx the parse tree
	 */
	exitFieldlist?: (ctx: FieldlistContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	enterFieldsep?: (ctx: FieldsepContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	exitFieldsep?: (ctx: FieldsepContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.operatorOr`.
	 * @param ctx the parse tree
	 */
	enterOperatorOr?: (ctx: OperatorOrContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.operatorOr`.
	 * @param ctx the parse tree
	 */
	exitOperatorOr?: (ctx: OperatorOrContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.operatorAnd`.
	 * @param ctx the parse tree
	 */
	enterOperatorAnd?: (ctx: OperatorAndContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.operatorAnd`.
	 * @param ctx the parse tree
	 */
	exitOperatorAnd?: (ctx: OperatorAndContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.operatorComparison`.
	 * @param ctx the parse tree
	 */
	enterOperatorComparison?: (ctx: OperatorComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.operatorComparison`.
	 * @param ctx the parse tree
	 */
	exitOperatorComparison?: (ctx: OperatorComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.operatorStrcat`.
	 * @param ctx the parse tree
	 */
	enterOperatorStrcat?: (ctx: OperatorStrcatContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.operatorStrcat`.
	 * @param ctx the parse tree
	 */
	exitOperatorStrcat?: (ctx: OperatorStrcatContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.operatorAddSub`.
	 * @param ctx the parse tree
	 */
	enterOperatorAddSub?: (ctx: OperatorAddSubContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.operatorAddSub`.
	 * @param ctx the parse tree
	 */
	exitOperatorAddSub?: (ctx: OperatorAddSubContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.operatorMulDivMod`.
	 * @param ctx the parse tree
	 */
	enterOperatorMulDivMod?: (ctx: OperatorMulDivModContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.operatorMulDivMod`.
	 * @param ctx the parse tree
	 */
	exitOperatorMulDivMod?: (ctx: OperatorMulDivModContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.operatorBitwise`.
	 * @param ctx the parse tree
	 */
	enterOperatorBitwise?: (ctx: OperatorBitwiseContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.operatorBitwise`.
	 * @param ctx the parse tree
	 */
	exitOperatorBitwise?: (ctx: OperatorBitwiseContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.operatorUnary`.
	 * @param ctx the parse tree
	 */
	enterOperatorUnary?: (ctx: OperatorUnaryContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.operatorUnary`.
	 * @param ctx the parse tree
	 */
	exitOperatorUnary?: (ctx: OperatorUnaryContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.operatorPower`.
	 * @param ctx the parse tree
	 */
	enterOperatorPower?: (ctx: OperatorPowerContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.operatorPower`.
	 * @param ctx the parse tree
	 */
	exitOperatorPower?: (ctx: OperatorPowerContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `luaxParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `luaxParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
}

