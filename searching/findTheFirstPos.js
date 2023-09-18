let input = "3 2\n1 3 5\n1 5";
let inputs = input.split("\n");
let [N, queriesNum] = inputs[0].split(" ").map((x) => parseInt(x));
let arr = inputs[1].split(" ").map((x) => parseInt(x));
let queries = inputs[2].split(" ").map((x) => parseInt(x));

function findThePos(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let index = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      index = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return index + 1;
}
for (let query of queries) {
  console.log(findThePos(arr, query));
}
