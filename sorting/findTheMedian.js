let input = "5\n10 8 14 10 3";
let inputs = input.split("\n");
let n = parseInt(inputs[0]);
let arr = inputs[1].split(" ").map((x) => parseInt(x));
function findTheMedian(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr[Math.floor(arr.length / 2)]);
}
