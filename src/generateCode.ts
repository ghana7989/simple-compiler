export const generateCode = (node: any): string | any => {
	if (node.type === 'NumericLiteral') {
		return node.value;
	}
	if (node.type === 'Identifier') {
		return node.name;
	}
	if (node.type === 'CallExpression') {
		// fn(arg1, arg2)
		return `
    ${generateCode(node.callee)}(${node.arguments.map(generateCode).join(', ')})
      `;
	}
	if (node.type === 'ExpressionStatement') {
		return `${generateCode(node.expression)}`;
	}
	if (node.type === 'Program') {
		// because we may have more than one statement
		return node.body.map(generateCode).join('\n');
	}
};
