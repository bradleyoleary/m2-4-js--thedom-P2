// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
  // Your code here
  // If paragraph length is equal to more than 40 chars, return
  if (paragraph.length <= 40) {
    return paragraph;
  } 
  let stringWithWhiteSpace = "";
  let paragraphAsArray = paragraph.split("")//splitting paragraph every space

  for (let i = 0; i < paragraphAsArray.length; i++) {
    if (i != 0 && i % 40 == 0) {
      stringWithWhiteSpace += "\n";
    } else {
      stringWithWhiteSpace += paragraphAsArray[i];
    }
  }

  let newStringWithoutWhiteSpace = "";
  let sentences = stringWithWhiteSpace.split("\n");

  for (let i = 0; i < sentences.length; i++) {
    newStringWithoutWhiteSpace += sentences[i].trim();

    if (i != sentences.length - 1) {
      newStringWithoutWhiteSpace += "\n";
    }
  }
  return newStringWithoutWhiteSpace;
};

console.log(wrapAfter40Chars(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
))
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;

//split 
//lopp
//result =+