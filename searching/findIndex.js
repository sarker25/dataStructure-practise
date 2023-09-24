const findIndex = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return -1;
};
console.log(findIndex([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(findIndex([-1, 0, 3, 5, 9, 12], 9)); // 4
