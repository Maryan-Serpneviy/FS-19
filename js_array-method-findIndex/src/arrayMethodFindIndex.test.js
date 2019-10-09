'use strict';

const applyCustomFindIndex = require('./arrayMethodFindIndex');

const source = [0, 10, 20, 30];
applyCustomFindIndex();

test('findIndex2 is added to [].__proto__', () => {
  expect([].findIndex2)
    .toBeInstanceOf(Function);
});

test(`findIndex2 doesn't call default findIndex`, () => {
  expect([].findIndex2.toString().includes('.findIndex('))
    .toBe(false);
});

test('for findIndex(item => item > 10)', () => {
  expect(source.findIndex2(x => x > 10))
    .toBe(2);
});

test('for findIndex(item => item > 100)', () => {
  expect(source.findIndex2(x => x > 100))
    .toBe(-1);
});

test('-1 is returned for []', () => {
  expect([].findIndex2(x => true))
    .toBe(-1);
});

test('for findIndex((item, index) => index > 0)', () => {
  expect(source.findIndex2((x, i) => i > 0))
    .toBe(1);
});

test('for findIndex((item, index, arr) => arr === source)', () => {
  expect(source.findIndex2((x, i, arr) => arr === source))
    .toBe(0);
});

test('Source array is not changed', () => {
  expect(source)
    .toEqual([0, 10, 20, 30]);
});
