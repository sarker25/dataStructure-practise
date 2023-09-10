let input = "5 3\n10 8 14 3 10";
let inputs = input.split("\n");
let n = parseInt(inputs[0].split(" ")[0]);
let k = parseInt(inputs[0].split(" ")[1]);
let arr = inputs[1].split(" ").map((x) => parseInt(x));
function maximumSum(arr, k) {
  arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
maximumSum(arr, k);
