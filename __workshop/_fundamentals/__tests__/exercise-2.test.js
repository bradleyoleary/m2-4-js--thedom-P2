// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  // add more tests here...
  expect(redacted(["bacon", true, 42])).toStrictEqual(["redacted", true, 42]);
  expect(redacted(["bacon", "false", "42"])).toStrictEqual(["redacted", "redacted", "redacted"]);
  expect(redacted(["cheese", false, 42])).toStrictEqual(["redacted", false, 42]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
