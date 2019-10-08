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
  const properties = sourceString.split(';');
  const result = {};

  for (const prop of properties) {
    const [key, value] = prop.split(':');
    if (value !== undefined) {
      result[key.trim()] = value.trim();
    }
  }
  return result;
}

module.exports = convertToObject;
