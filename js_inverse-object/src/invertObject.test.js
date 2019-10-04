'use strict';

const invertObject = require('./invertObject');

test('Empty object', () => {
  expect(invertObject({}))
    .toEqual({});
});

test('Simple object with one property', () => {
  expect(invertObject({ 'foo': 'bar' }))
    .toEqual({ 'bar': 'foo' });
});

test('Numeric keys and values', () => {
  expect(invertObject({ '1': 2, '2': 4, '3': 6 }))
    .toEqual({ '2': '1', '4': '2', '6': '3' });
});

test('Repeating values', () => {
  expect(invertObject({ 'foo': 'bar', 'hello': 'world', 'js': 'bar' }))
    .toEqual(null);
});
