'use strict';

const getTime = require('./getTime');

test('Breakfast at 09:00', () => {
  expect(getTime('Breakfast at 09:00'))
    .toBe('09:00');
});

test('00:00', () => {
  expect(getTime('00:00'))
    .toBe('00:00');
});

test('23:59', () => {
  expect(getTime('23:59'))
    .toBe('23:59');
});

test('37:98', () => {
  expect(getTime('37:98'))
    .toBe('');
});

test('09:60', () => {
  expect(getTime('09:60'))
    .toBe('');
});

test('24:05', () => {
  expect(getTime('24:05'))
    .toBe('');
});

test('09:123', () => {
  expect(getTime('09:123'))
    .toBe('');
});

test('000:12', () => {
  expect(getTime('000:12'))
    .toBe('');
});

test('wrong 000:12, correct 01:12', () => {
  expect(getTime('wrong 000:12, correct 01:12'))
    .toBe('01:12');
});

test('Breakfast at 09:00, Dinner at 21:01', () => {
  expect(getTime('Breakfast at 09:00, Dinner at 21:01'))
    .toBe('09:00');
});

test('Breakfast at 24:00', () => {
  expect(getTime('Breakfast at 24:00'))
    .toBe('');
});
