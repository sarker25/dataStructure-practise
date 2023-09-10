/**
 * {problem description}
 * You are given an array of integers of size N.N is even. Initially, your score is 0.You   do the following operation until the array becomes empty
 *
 * For Each operation, select two integers from the array, remove them, multiply them, and add them to your score.
 */

let input = "6\n10 8 14 3 10 2";
let inputs = input.split("\n");
let n = parseInt(inputs[0]);
let arr = inputs[1].split(" ").map((x) => parseInt(x));

function minimumProductSum(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  while (arr.length > 0) {
    let first = arr.shift();
    let last = arr.pop();
    sum += first * last;
  }
  console.log(sum);
}
minimumProductSum([10, 8, 14, 3, 10, 2]);
