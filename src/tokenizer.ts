import { REGEX } from './constants/regex';
import { IToken } from './types';

export const tokenizer = (input: string) => {
	const tokens: IToken[] = [];
	let current = 0;
	while (current < input.length) {
		let char = input[current];
		if (char === '(' || char === ')') {
			tokens.push({
				type: 'paren',
				value: char,
			});
			current++;
			continue;
		}
		if (REGEX.LETTERS.test(char)) {
			let value = '';
			while (REGEX.LETTERS.test(char)) {
				value += char;
				char = input[++current];
			}
			tokens.push({
				type: 'name',
				value,
			});
			continue;
		}
		if (REGEX.WHITE_SPACE.test(char)) {
			current++;
			continue;
		}
		if (REGEX.NUMBERS.test(char)) {
			let value = '';
			while (REGEX.NUMBERS.test(char)) {
				value += char;
				char = input[++current];
			}
			tokens.push({
				type: 'number',
				value,
			});
			continue;
		}
		throw new TypeError(`Unknown char: '${char}'`);
	}
	return tokens;
};
