'use strict';

const getOperands = require('./getOperands');

test('1 + 2', () => {
  expect(getOperands('1 + 2'))
    .toBe('a: 1, b: 2');
});

test('1.2 * -3.4', () => {
  expect(getOperands('1.2 * -3.4'))
    .toBe('a: 1.2, b: -3.4');
});

test('-3 / -6', () => {
  expect(getOperands('-3 / -6'))
    .toBe('a: -3, b: -6');
});

test('-2 - 2', () => {
  expect(getOperands('-2 - 2'))
    .toBe('a: -2, b: 2');
});

test('2 - -2', () => {
  expect(getOperands('2 - -2'))
    .toBe('a: 2, b: -2');
});

test('-2 + -2', () => {
  expect(getOperands('-2 + -2'))
    .toBe('a: -2, b: -2');
});

test('-2 - -2', () => {
  expect(getOperands('-2 - -2'))
    .toBe('a: -2, b: -2');
});
