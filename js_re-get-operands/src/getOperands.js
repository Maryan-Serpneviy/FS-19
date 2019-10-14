'use strict';

/**
 * Implement getOperands function:
 *
 * Function takes a string which is Math expression of 2 numbers and returns
 * it's operands in the next format: 'a: <first_operand>, b: <second_operand>'.
 *
 * Given string is a math operation which contains 2 numbers (operands) and
 * operator (*, /, +, -). For example: '1 + 2',  '1.2 * -3.4',  '-3 / -6',
 * '-2 - 2'
 *
 * Allowed operators: '+', '-', '*', '/'.
 * Whitespaces around operator and numbers are allowed.
 * Numbers can be floats (1.2, 2.354).
 * Negative numbers have a minus sign '-' before them without whitespace.
 * (-2, -2.354).
 *
 * getOperands('1 + 2') === 'a: 1, b: 2';
 * getOperands('1.2 * -3.4') === 'a: 1.2, b: -3.4';
 * getOperands('1 - 2') === 'a: 1, b: 2';
 * getOperands('1 - -2') === 'a: 1, b: -2';
 *
 * @param {string} str
 *
 * @return {string} - operands
 */
function getOperands(str) {
  const operator = /\s[+\-*/]\s/;
  const operands = str.split(operator);
  return `a: ${operands[0]}, b: ${operands[1]}`;
}

module.exports = getOperands;
