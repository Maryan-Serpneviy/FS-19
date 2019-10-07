'use strict';

const countByX = require('./countByX');

describe('countByX', () => {
  it('Should return an array', () => {
    expect(countByX(1, 2)).toBeInstanceOf(Array);
  });

  it('Should return an array of numbers', () => {
    expect(countByX(5, 3)
      .every(num => typeof num === 'number')).toBeTruthy();
  });

  it('Should return correct list', () => {
    expect(countByX(1, 3)).toEqual([1, 2, 3]);
  });

  it('Should return correct list 2', () => {
    expect(countByX(2, 5)).toEqual([2, 4, 6, 8, 10]);
  });

  it('Should return correct list 3', () => {
    expect(countByX(10, 4)).toEqual([10, 20, 30, 40]);
  });
});
