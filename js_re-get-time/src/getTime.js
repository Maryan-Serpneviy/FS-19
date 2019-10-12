'use strict';

/**
 * Implement getTime function:
 *
 * Function takes string and returns first valid time in this string. Valid time
 * has format 'hh:mm'. Both hours and minutes have 2 digits, e.g. '09:00'. Hours
 * is at most 23 and minutes is at most 59. '37:98' is not valid time. If
 * correct time not found the function returns empty string.
 *
 * getTime('Breakfast at 09:00') === '09:00'
 * getTime('Breakfast at 09:60, Dinner at 21:00') === '21:00'
 * getTime('Breakfast at 09:59, Dinner at 21:00') === '09:59'
 *
 *
 * @param {string} str
 *
 * @returns {string} - valid time
 */
function getTime(str) {
  const validTime = /^(([01][0-9])|(2[0-3])):[0-5]\d$/;
  const INVALID_LEN = 6;
  // checking multiple entries first
  if (str.length > INVALID_LEN) {
    // must include 'g' flag to avoid infinite loop
    const invalidTime = /\d+:\d+/g;
    const timeEntries = [];
    let match;
    // matching valid / invalid formats
    while ((match = invalidTime.exec(str))) {
      timeEntries.push(match[0]);
    }
    for (let i = 0; i < timeEntries.length; i++) {
      // matching valid only
      if (validTime.test(timeEntries[[i]])) {
        return timeEntries[[i]];
      }
    }
  }
  // for strings consisting of digits only
  if (validTime.exec(str)) { return validTime.exec(str)[0]; }
  // return empty string if there's no match
  return '';
}

module.exports = getTime;
