'use strict';

const applyCustomMap = require('./arrayMethodMap');

const source = [0, 10, 20, 30];
applyCustomMap();

test('`map2` is added to [].__proto__', () => {
  expect([].map2)
    .toBeInstanceOf(Function);
});

test(`map2 doesn't call default map`, () => {
  expect([].map2.toString().includes('.map('))
    .toBe(false);
});

test('map(x => x + 1)', () => {
  expect(source.map2(x => x + 1))
    .toEqual([1, 11, 21, 31]);
});

test('[] is mapped to []', () => {
  expect([].map2(x => 10))
    .toEqual([]);
});

test('Source array is not changed', () => {
  expect(source)
    .toEqual([0, 10, 20, 30]);
});
