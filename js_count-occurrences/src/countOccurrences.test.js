'use strict';

const countOccurrences = require('./countOccurrences');

test('Empty string', () => {
  expect(countOccurrences('', 'a'))
    .toBe(0);
});

test('No occurrences: b in Samsung', () => {
  expect(countOccurrences('Samsung', 'b'))
    .toBe(0);
});

test('s in Samsung', () => {
  expect(countOccurrences('Samsung', 's'))
    .toBe(2);
});

test('a in Abrakadabra', () => {
  expect(countOccurrences('Abrakadabra', 'a'))
    .toBe(5);
});
