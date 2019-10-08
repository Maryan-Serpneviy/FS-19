'use strict';

/**
 * Implement capitalsFirst function:
 *
 * Create a function that takes an input String and returns a String, where all
 * the uppercase words of the input String are in front and all the lowercase
 * words at the end. The order of the uppercase and lowercase words should be
 * the order in which they occur.
 *
 * If a word starts with a number or special character, skip the word and leave
 * it out of the result. Input String will not be empty.
 *
 * capitalFirst("hey You, Sort me Already!") === "You, Sort Already! hey me"
 *
 * @param {string} str
 *
 * @returns {string} - string with uppercase words in front
 */
function capitalsFirst(str) {
  const words = str.split(' ');
  const lowerCaseWords = [];
  const upperCaseWords = [];
  for (const word of words) {
    if (isLowerCased(word)) {
      lowerCaseWords.push(word);
    } else if (isUpperCased(word)) {
      upperCaseWords.push(word);
    }
  }
  return [...lowerCaseWords, ...upperCaseWords].join(' ');
}

const isUpperCased = str => str.length > 0 && str[0] >= 'a' && str[0] <= 'z';

const isLowerCased = str => str.length > 0 && str[0] >= 'A' && str[0] <= 'Z';

module.exports = capitalsFirst;
