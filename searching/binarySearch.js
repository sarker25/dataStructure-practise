let arr = [
  1,
  4,
  5,
  7,
  3,
  4,
  15,
  61,
  984,
  94,
  6,
  16,
  1,
  964,
  984,
  1,
  564,
  874,
  84,
  1,
  ,
  5,
  87,
  874,
  694,
  654,
];
arr = arr.sort((a, b) => a - b);
function binarySearch(arr, target) {
  let left = arr[0];
  let right = arr[arr.length - 1];
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
}
