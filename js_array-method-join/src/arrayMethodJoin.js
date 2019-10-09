'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) { return ''; }
    if (this.length === 1) { return String(this[0]); }

    let s = separator;
    if (separator === undefined) {
      s = ',';
    }

    const m = this.map(element => {
      if (element === null || element === undefined) {
        return '';
      }
      return element;
    });

    let j = m[0];
    for (let i = 0; i < m.length - 1; i++) {
      if (m[i] === null || m[i] === undefined) {
        m[i] = '';
      }
      j += `${String(s)}${m[i + 1]}`;
    }
    return j;
  };
}

module.exports = applyCustomJoin;
