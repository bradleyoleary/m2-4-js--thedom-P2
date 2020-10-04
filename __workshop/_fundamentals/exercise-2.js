// Exercise 2
//
// Part 1 - Write
// ---------------
// Write a function accepts an array of values and returns a new array of values with all of the strings replaced with the word "redacted" (each value is replaced by the word 'redacted').
// Do not redact values that are not strings.
//
// e.g. redacted(["bacon", false, 42]) returns [ 'redacted', false, 42 ]
//

const redacted = (arr) => {
  // Insert missing solution please
  // Object.keys(arr).forEach(function(key){ arr[key] = "redacted"});
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      newArr[i] = "redacted" 
    }
    else {
      newArr[i] = arr[i]
    }
  }
  return newArr;
};

console.log(redacted(["bacon", false, 42]))

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = redacted;
