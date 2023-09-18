let input = "16";

function findMinimumX(N) {
  let left = 1;
  let right = N;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = (mid * (mid + 1)) / 2;

    if (sum >= N) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}
console.log(findMinimumX(input));
