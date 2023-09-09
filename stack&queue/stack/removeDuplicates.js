const Stack = require("./stack");

// Problem: Remove duplicate characters from a string
const removeDuplicates = (str) => {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (stack.isEmpty()) {
      stack.push(str[i]);
    } else if (stack.peek() === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.print();
};
console.log(removeDuplicates("abbaca"));
