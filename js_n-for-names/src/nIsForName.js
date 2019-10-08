'use strict';

/**
 * Implement nIsForName function:
 *
 * You are given an array of full names of several people. Return an array that
 * contains only those of the given names that satisfy the property: at least
 * one part of the name starts with the letter N. If nobody has N at the start
 * of the name return an empty array.
 *
 * For example, if the array
 * ['Harrison Ford', 'Robert De Niro', 'Morgan Freeman', 'Matt Damon',
 * 'Christofer Nolan', 'Natalie Portman', 'Martin Scorsese' , 'Nick Nolte']
 * is given, you must return
 * ['Robert De Niro', 'Christofer Nolan', 'Natalie Portman', 'Nick Nolte'].
 *
 * You are encouraged to use the `filter` and `some` array methods to solve this
 * problem. Please do not use `for` or any other kind of loop.
 *
 * @param {string[]} names
 *
 * @return {string[]}
 */
function nIsForName(names) {
  if (names.some(name => name.includes('N '))) { return []; }
  return names.filter(name => name.includes('N'));
}

module.exports = nIsForName;
