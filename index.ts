import { compiler } from './src/compiler';

const input = '(add 2 (sub 4 3))';
const output = compiler(input);
console.log(output);

/**
 * (add 2 (sub 4 3)) 
 *   ||
 *   v
 *  add(2,   
      sub(4, 3)
      )   
 */
