'use strict';

/**
 * Implement method Filter
 */
function applyCustomFilter() {
  [].__proto__.filter2 = function(func, thisArg) {
    if (!((typeof func === 'function') && this) ) {
      throw new TypeError();
    }

    const len = this.length >>> 0;
    const res = new Array(len); // попередньо створений масив
    const t = this;
    let c = 0;
    let i = -1;

    let kValue;
    if (thisArg === undefined) {
      while (++i !== len) {
        // перевіряє, чи заданий ключ
        if (i in this) {
          kValue = t[i]; // у цьому випадку t змінюється у функції callback
          if (func(t[i], i, t)) {
            res[c++] = kValue;
          }
        }
      }
    } else {
      while (++i !== len) {
        // перевіряє, чи заданий ключ
        if (i in this) {
          kValue = t[i];
          if (func.call(thisArg, t[i], i, t)) {
            res[c++] = kValue;
          }
        }
      }
    }
    res.length = c; // зменшити масив до правильного розміру
    return res;
  };
}

module.exports = applyCustomFilter;
