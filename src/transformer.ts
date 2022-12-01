import { traverse } from './traverse';
import { AST } from './types';

export const transformer = (originalAST: AST) => {
	const jsAST = {
		type: 'Program',
		body: [],
	};

	let position: any = jsAST.body;

	traverse(originalAST, {
		NumberLiteral(node: { value: any }) {
			position.push({
				type: 'NumericLiteral',
				value: node.value,
			});
		},
		CallExpression(node: { name: any }, parent: { type: string }) {
			let expression: any = {
				type: 'CallExpression',
				callee: {
					type: 'Identifier',
					name: node.name,
				},
				arguments: [],
			};
			const prevPosition = position;
			position = expression.arguments;
			if (parent.type !== 'CallExpression') {
				expression = {
					type: 'ExpressionStatement',
					expression,
				};
			}
			prevPosition.push(expression);
		},
	});

	return jsAST;
};
