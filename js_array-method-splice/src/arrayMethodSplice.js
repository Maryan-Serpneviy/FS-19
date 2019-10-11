'use strict';

/**
 * Implement method Splice
 */
function applyCustomSplice() {
  [].__proto__.splice2 = function(from, deleteCount, ...newElements) {
    if (!Array.isArray(this)) {
      throw new TypeError();
    }
    for (const arg of arguments) {
      if (!typeof arg === 'number' || !typeof arg === undefined) {
        throw new TypeError();
      }
    }
    if (arguments.length === 0) { return []; }

    // "from" conditions
    let start = from;
    if (from > this.length) {
      start = this.length;
    } else if (this.length + from < 0 || from === undefined) {
      start = 0;
    } else if (from < 0) {
      start = this.length + from;
    }

    // "to" conditions
    let to = deleteCount;
    if (
      !deleteCount
      || deleteCount >= this.length - from
      || this.length + from < 0
    ) {
      to = this.length;
    } else if (from < 0 && deleteCount > 0) {
      to = start + deleteCount;
    } else if (deleteCount > 0) {
      to = from + deleteCount || 0 + deleteCount;
    }

    const spliced = [];
    if (newElements.length === 0) {
      // splice ${deleteCount} elements
      let d = 0;
      for (let i = start; i < to; i++) {
        spliced[spliced.length] = this[i];
        delete this[i];
        d++;
      }
      // shift rest
      if (deleteCount > 0) {
        for (let i = start; i < this.length; i++) {
          this[i] = this[i + deleteCount];
        }
      }
      this.length -= d;
      // normalize source length
    } else if (newElements.length > 0) {
      // splice ${deleteCount} elements
      if (deleteCount > 0) {
        for (let i = start; i < to; i++) {
          spliced[spliced.length] = this[i];
          delete this[i];
        }
      }
      // calculate rest start index
      start = from + deleteCount;
      // store rest elements
      const rest = [];
      for (let i = start; i < this.length; i++) {
        rest[rest.length] = this[i];
      }
      // normalize source length
      this.length = this.length - deleteCount + newElements.length;
      // calculate start index for shifting
      start = from + deleteCount;
      // shift rest elements
      let e = 0;
      if (deleteCount > 0) {
        for (let i = start - 1; i < this.length; i++) {
          for (let r = rest.length; r > 0; r--) {
            this[this.length - e - 1] = rest[rest.length - e - 1];
          }
          e++;
        }
      }
      if (deleteCount <= 0) {
        for (let i = start; i < this.length; i++) {
          this[this.length - e - 1]
          = this[this.length - e - from - newElements.length];
          e++;
        }
      }
      // paste new elements
      for (let i = 0; i < newElements.length; i++) {
        this[from + i] = newElements[i];
      }
    }
    return spliced;
  };
}

module.exports = applyCustomSplice;
