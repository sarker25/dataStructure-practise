let input = "5 15\n 3 8 10 10 14";
let inputs = input.split("\n");
let [N, X] = inputs[0].split(" ").map((x) => parseInt(x));
let arr = inputs[1].split(" ").map((x) => parseInt(x));

function presentOrAbsent(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return "P";
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return "A";
}

console.log(presentOrAbsent(arr, X));
