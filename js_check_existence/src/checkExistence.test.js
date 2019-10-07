'use strict';

const checkExistence = require('./checkExistence');

describe('checkExistence', () => {
  it('Should return boolean value', () => {
    const positiveResult = checkExistence([1, 2], 1);
    const negativeResult = checkExistence(['ab', 'cd', 'bc'], 'ac');

    expect(Boolean(positiveResult)).toBe(positiveResult);
    expect(Boolean(negativeResult)).toBe(negativeResult);
  });

  it('Should return true if value exists in array', () => {
    expect(checkExistence(['Bob', 1, { key: 'value' }, 42], 42)).toBe(true);
  });

  it('Should return false if value not exists in array', () => {
    expect(checkExistence(['Bob', 1, { key: 'value' }, 42], 'Tom')).toBe(false);
  });

  it('Should return false if array is empty', () => {
    expect(checkExistence([], 2)).toBe(false);
  });

  it('Should return true if value exists multiple times', () => {
    expect(checkExistence([1, 1, 1, 1], 1)).toBe(true);
  });
});
