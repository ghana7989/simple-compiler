type TokenType = 'number' | 'paren' | 'name';
export interface IToken {
	type: TokenType;
	value: string;
}

interface INumberLiteralExpression {
	type: string;
	value: string;
}
interface ICallExpression {
	type: string;
	name: string;
	params: TExpression[];
}
export type TExpression = INumberLiteralExpression | ICallExpression;
export type AST = {
	type: 'Program';
	body: TExpression[];
};

export type TNode = {
	name: string;
	value: string | number | Node;
};
