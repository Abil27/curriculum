/**
 * Takes in 3 numbers, returns their sum
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */

const solution = (a, b, c) => {
  return a + b + c;
};

console.log(`This function will return the sum of 1+2+3 which is ${solution(1,2,3)}`);

module.exports = {
  solution,
};
