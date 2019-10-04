'use strict';

/**
 * Implement swapCase function:
 *
 * Given a string, swap the case for each of the letters.
 *
 * Examples:
 * swapCase "aBc"      should return "AbC"
 * swapCase "ABC"      should return "abc"
 * swapCase "123235"   should return "123235"
 *
 * @param {string} phrase
 *
 * @return {string}
 */
function swapCase(phrase) {
  let swappedPhrase = '';
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === phrase[i].toLowerCase()) {
      swappedPhrase += phrase[i].toUpperCase();
    } else {
      swappedPhrase += phrase[i].toLowerCase();
    }
  }
  return swappedPhrase;
}

module.exports = swapCase;
