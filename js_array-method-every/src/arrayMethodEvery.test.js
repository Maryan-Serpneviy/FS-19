'use strict';

const applyCustomEvery = require('./arrayMethodEvery');

const source = [0, 10, 20, 30];
applyCustomEvery();

test('every2 is added to [].__proto__', () => {
  expect([].every2)
    .toBeInstanceOf(Function);
});

test(`every2 doesn't call default every`, () => {
  expect([].every2.toString().includes('.every('))
    .toBe(false);
});

test('for (item) => item > 10', () => {
  expect(source.every2(x => x > 10))
    .toBe(false);
});

test('for (item) => item > -100', () => {
  expect(source.every2(x => x > -100))
    .toBe(true);
});

test('true is returned for []', () => {
  expect([].every2(x => true))
    .toBe(true);
});

test('for (item, index) => index > -1', () => {
  expect(source.every2((x, i) => i > -1))
    .toBe(true);
});

test('(item, index, arr) => arr === source)', () => {
  expect(source.every2((x, i, arr) => arr === source))
    .toBe(true);
});

test('Source array is not changed', () => {
  expect(source)
    .toEqual([0, 10, 20, 30]);
});
