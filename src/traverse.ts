export const traverse = (ast: any, visitors: any) => {
	function walkNode(node: any, parent: any) {
		const method = visitors[node.type];
		if (method) {
			method(node, parent);
		}
		if (node.type === 'Program') {
			walkNodes(node.body, node);
		} else if (node.type === 'CallExpression') {
			walkNodes(node.params, node);
		}
	}
	function walkNodes(nodes: any[], parent: any) {
		nodes.forEach((node: any) => walkNode(node, parent));
	}
	walkNode(ast, null);
};
