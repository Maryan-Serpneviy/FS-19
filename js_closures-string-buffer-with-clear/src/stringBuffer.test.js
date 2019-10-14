'use strict';

const makeBuffer = require('./stringBuffer');

test('Works with one call', () => {
  const buffer = makeBuffer();
  buffer('Simple string');
  expect(buffer())
    .toBe('Simple string');
});

test('Works with few calls', () => {
  const buffer = makeBuffer();
  buffer('abc');
  buffer('def');
  buffer('ghi');
  expect(buffer())
    .toBe('abcdefghi');
});

test('Clear works', () => {
  const buffer = makeBuffer();
  buffer('Simple string ');
  buffer('is buffered');
  expect(buffer())
    .toBe('Simple string is buffered');

  buffer.clear();
  expect(buffer())
    .toBe('');

  buffer('well');
  expect(buffer())
    .toBe('well');
});

test('Works with whitespaces', () => {
  const buffer = makeBuffer();
  buffer('Simple string ');
  buffer('is buffered');
  buffer(' well');
  expect(buffer())
    .toBe('Simple string is buffered well');
});

test('Works with numbers', () => {
  const buffer = makeBuffer();
  buffer('The breakfast at ');
  buffer(10);
  buffer('AM');
  expect(buffer())
    .toBe('The breakfast at 10AM');
});

test('Many calls of buffer()', () => {
  const buffer = makeBuffer();
  buffer('a');
  buffer('a');
  buffer('a');
  buffer('a');
  buffer('a');
  expect(buffer())
    .toBe('aaaaa');

  buffer('a');
  buffer('a');
  buffer('a');
  buffer('asdfa');
  buffer('asdfa');
  buffer('asdfa');
  buffer('asdfa');
  expect(buffer())
    .toBe('aaaaaaaaasdfaasdfaasdfaasdfa');

  buffer('asdfa');
  buffer('asdfa');
  buffer('asdfa');
  buffer('asdfa');
  buffer('AM');
  expect(buffer())
    .toBe('aaaaaaaaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaAM');
});

test('Many calls of buffer() along with buffer.clear()', () => {
  const buffer = makeBuffer();
  buffer('a');
  buffer('a');
  buffer('a');
  buffer('a');
  buffer.clear();
  buffer('a');
  expect(buffer())
    .toBe('a');

  buffer('a');
  buffer('a');
  buffer('a');
  buffer.clear();
  buffer('asdfa');
  buffer('asdfa');
  expect(buffer())
    .toBe('asdfaasdfa');
  buffer('asdfa');
  buffer('asdfa');
  expect(buffer())
    .toBe('asdfaasdfaasdfaasdfa');

  buffer('asdfa');
  buffer('asdfa');
  buffer('asdfa');
  buffer('asdfa');
  buffer.clear();
  buffer('AM');
  expect(buffer())
    .toBe('AM');
});

test('Works with 0 and empty string', () => {
  const buffer = makeBuffer();
  buffer('The breakfast at');
  buffer(' ');
  buffer(1);
  buffer(0);
  buffer('');
  buffer('AM');
  expect(buffer())
    .toBe('The breakfast at 10AM');
});

test('Works with a lot of whitespaces', () => {
  const buffer = makeBuffer();
  buffer('                   ');
  buffer(' ');
  buffer(1);
  buffer(0);
  buffer('    ');
  expect(buffer())
    .toBe('                    10    ');
  buffer.clear();
  expect(buffer())
    .toBe('');
});
