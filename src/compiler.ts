import { generateCode } from './generateCode';
import { parser } from './parser';
import { tokenizer } from './tokenizer';
import { transformer } from './transformer';

export const compiler = (input: string) => {
	const tokens = tokenizer(input);
	const lispAST = parser(tokens);
	const jsAST = transformer(lispAST);
	const jsCode = generateCode(jsAST);
	return jsCode;
};
/**
 * {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "add"
        },
        "arguments": [
          {
            "type": "NumericLiteral",        
            "value": "2"
          },
          {
            "type": "CallExpression",        
            "callee": {
              "type": "Identifier",
              "name": "sub"
            },
            "arguments": [
              {
                "type": "NumericLiteral",    
                "value": "4"
              },
              {
                "type": "NumericLiteral",    
                "value": "3"
              }
            ]
          }
        ]
      }
    }
  ]
}
 */
