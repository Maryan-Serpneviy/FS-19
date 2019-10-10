'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(callback, thisArg) {
    const f = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        f.push(this[i]);
      }
    }
    return f;
  };
}

module.exports = applyCustomFilter;
