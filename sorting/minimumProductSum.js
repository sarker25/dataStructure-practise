let input = "6\n10 8 14 3 10 2";
let inputs = input.split("\n");
let n = parseInt(inputs[0]);
let arr = inputs[1].split(" ").map((x) => parseInt(x));
console.log(arr);

function minimumProductSum(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    sum += arr[i] * arr[arr.length - i - 1];
  }
  console.log(sum);
}
minimumProductSum(arr);
