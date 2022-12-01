import { AST, IToken, TExpression } from './types';

export const parser = (tokens: IToken[]) => {
	let current = 0;
	function walk() {
		let token = tokens[current];
		if (token.type === 'number') {
			current++;
			return {
				type: 'NumberLiteral',
				value: token.value,
			};
		}
		if (token.type === 'paren' && token.value === '(') {
			token = tokens[++current];
			const expression: TExpression = {
				type: 'CallExpression',
				name: token.value,
				params: [],
			};
			token = tokens[++current];
			while (token.value !== ')') {
				expression.params.push(walk());
				token = tokens[current];
			}
			current++;
			return expression;
		}
		throw new TypeError(`Unknown token: ${token}'`);
	}
	const ast: AST = {
		type: 'Program',
		body: [walk()],
	};
	return ast;
};
