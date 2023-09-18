let input = "3 2 5\n-1 0 1";
let inputs = input.split("\n");
let [N, left, right] = inputs[0].split(" ").map((x) => parseInt(x));
let arr = inputs[1].split(" ").map((x) => parseInt(x));

function presentOrAbsent(arr, left, right) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    const mid = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[mid] >= left && arr[mid] <= right) {
      return "P";
    } else if (arr[mid] < left) {
      leftIndex = mid + 1;
    } else {
      rightIndex = mid - 1;
    }
  }
  return "A";
}
console.log(presentOrAbsent(arr, left, right));
