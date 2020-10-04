// We import (require) the function that we want to test.
const convertToString = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(convertToString([1, 2, 3, 4, 5])).toStrictEqual([
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);
  expect(convertToString([8, 100, 356, 4, 89])).toStrictEqual([
    "8",
    "100",
    "356",
    "4",
    "89",
  ]);
  expect(convertToString([122155, 109, 56, 4989899666555, 1])).toStrictEqual([
    "122155",
    "109",
    "56",
    "4989899666555",
    "1",
  ]);
});
// More info on jest expect: https://jestjs.io/docs/en/expect
