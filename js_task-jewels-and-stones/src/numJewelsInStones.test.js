'use strict';

const calculate = require('./numJewelsInStones');

test('Should ignore chars in another case', () => {
  expect(calculate('z', 'ZZZZZZ'))
    .toBe(0);
});

test('Should ignore special symbols', () => {
  expect(calculate('z123!_', 'ZZZ!ZZZ123_1'))
    .toBe(0);
});

test('Should ignore double symbols in jewel string', () => {
  expect(calculate('zzzzZZZZZZZZ', 'zzzZZZZ'))
    .toBe(7);
});

test('Should return correct count of jewels in stones', () => {
  expect(calculate('zZA', 'ZaZaAAazzzz'))
    .toBe(8);
});

test('Should return zero for empty string stones', () => {
  expect(calculate('zZA', ''))
    .toBe(0);
});

test('Should return zero for empty string jewels', () => {
  expect(calculate('', 'AAaaLllDdoooo'))
    .toBe(0);
});

test('Should return zero for empty strings jewels and stones', () => {
  expect(calculate('', ''))
    .toBe(0);
});
