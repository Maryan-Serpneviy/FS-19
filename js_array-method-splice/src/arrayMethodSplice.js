'use strict';

/**
 * Implement method Splice
 */
function applyCustomSplice() {
  [].__proto__.splice2 = function(start, deleteCount, ...items) {
    if (this.length === 0 || arguments.length === 0) {
      return [];
    }
    let len;
    if (!deleteCount || deleteCount >= len - start) {
      len = this.length;
    }
    const s = [];
    let c = 0;
    for (let i = start; i < len; i++) {
      s.push(this[i]);
      delete this[i];

      c++;
    }
    this.length -= c;
    return s;
  };
}

module.exports = applyCustomSplice;
