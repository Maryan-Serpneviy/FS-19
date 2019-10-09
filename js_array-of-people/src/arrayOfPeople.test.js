'use strict';

const arrayOfPeople = require('./arrayOfPeople');

test('No people', () => {
  expect(arrayOfPeople([]))
    .toEqual([]);
});

test('Single person', () => {
  expect(arrayOfPeople([23]))
    .toEqual([23]);
});

test('Single person reentering', () => {
  expect(arrayOfPeople([23, 23, 23]))
    .toEqual([23]);
});

test('Single person leaving', () => {
  expect(arrayOfPeople([23, 23, 23, 23]))
    .toEqual([]);
});

test('5 people, no one leaving', () => {
  expect(arrayOfPeople([3, 2, 5, 4, 1]))
    .toEqual([3, 2, 5, 4, 1]);
});

test('10 people, 20 events', () => {
  expect(arrayOfPeople(
    [4, 9, 8, 7, 1, 0, 8, 3, 8, 5, 6, 8, 1, 5, 9, 2, 0, 4, 6, 2]))
    .toEqual([7, 3]);
});
