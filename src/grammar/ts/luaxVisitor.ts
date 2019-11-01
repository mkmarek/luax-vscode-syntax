// Generated from src/grammar/luax.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `luaxParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface luaxVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `luaxParser.chunk`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChunk?: (ctx: ChunkContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat?: (ctx: StatContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.retstat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRetstat?: (ctx: RetstatContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.funcname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncname?: (ctx: FuncnameContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.varlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarlist?: (ctx: VarlistContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.namelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamelist?: (ctx: NamelistContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.explist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplist?: (ctx: ExplistContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.elementName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementName?: (ctx: ElementNameContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.elementTerminator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementTerminator?: (ctx: ElementTerminatorContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.elementChildren`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementChildren?: (ctx: ElementChildrenContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.prefixexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixexp?: (ctx: PrefixexpContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.functioncall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctioncall?: (ctx: FunctioncallContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.varOrExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarOrExp?: (ctx: VarOrExpContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.varSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarSuffix?: (ctx: VarSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.nameAndArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameAndArgs?: (ctx: NameAndArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.functiondef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctiondef?: (ctx: FunctiondefContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.funcbody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncbody?: (ctx: FuncbodyContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.parlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParlist?: (ctx: ParlistContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.tableconstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableconstructor?: (ctx: TableconstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.fieldlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldlist?: (ctx: FieldlistContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.fieldsep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldsep?: (ctx: FieldsepContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.operatorOr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorOr?: (ctx: OperatorOrContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.operatorAnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorAnd?: (ctx: OperatorAndContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.operatorComparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorComparison?: (ctx: OperatorComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.operatorStrcat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorStrcat?: (ctx: OperatorStrcatContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.operatorAddSub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorAddSub?: (ctx: OperatorAddSubContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.operatorMulDivMod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorMulDivMod?: (ctx: OperatorMulDivModContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.operatorBitwise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorBitwise?: (ctx: OperatorBitwiseContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.operatorUnary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorUnary?: (ctx: OperatorUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.operatorPower`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorPower?: (ctx: OperatorPowerContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `luaxParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
}

