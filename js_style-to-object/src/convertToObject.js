'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  console.log(sourceString.split(';'))
}

const stylesString = require('./stylesString');

convertToObject(stylesString);

module.exports = convertToObject;
