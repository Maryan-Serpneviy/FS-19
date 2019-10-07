'use strict';

/**
 * Implement getValueAtZero function:
 *
 * it takes another function 'initialFunction' and returns it's value with 0 as
 * argument
 *
 * const initialFunction = function(x) {
 *     return x + 5
 * };
 * getValueAtZero(initialFunction) === 5;
 *
 * @param {function} initialFunction
 *
 * @return {function}
 */
const initialFunction = x => x + 5;

const getValueAtZero = initFunc => initFunc(0);

getValueAtZero(initialFunction);

module.exports = getValueAtZero;
