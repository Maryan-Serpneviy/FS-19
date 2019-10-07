'use strict';

/**
 * Implement checkExistence function:
 *
 * Function takes an array and some element
 * and should return `true` if element exist in the array, `false` if not
 *
 * `checkExistence([1, 5, 7], 5) === true`
 * `checkExistence(['Bob', 'Tom'], 'John') === false`
 *
 * @param {[]} array
 * @param {*} element
 *
 * @return {boolean}
 */
function checkExistence(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
}

module.exports = checkExistence;
