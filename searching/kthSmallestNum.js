// let input = "5 6\n 1 2 3 4 5";
// let lines = input.split("\n");
// let [N, K] = lines[0].split(" ").map((item) => parseInt(item));
// let arr = lines[1].split(" ").map((item) => parseInt(item));

function countPairsSmallerOrEqual(arr, target) {
  let count = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < arr.length && right >= 0) {
    if (arr[left] * arr[right] <= target) {
      count += right + 1; // All elements to the left of arr[right] will also satisfy the condition
      left++;
    } else {
      right--;
    }
  }

  return count;
}

function findKthSmallestPairProduct(A, K) {
  A.sort((a, b) => a - b); // Sort the array in non-decreasing order

  let left = A[0] * A[0]; // Minimum possible pair product
  let right = A[A.length - 1] * A[A.length - 1]; // Maximum possible pair product

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const count = countPairsSmallerOrEqual(A, mid);

    if (count < K) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
// Read input


// Calculate and print the Kth smallest pair product
const result = findKthSmallestPairProduct([1, 2, 3, 4, 5], 6);
console.log(result);
