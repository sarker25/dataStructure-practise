const arr = [0, 1, 2, 4, 4, 5, 6, 7];
function rotateNtimes(arr, n) {
  if (arr.length === 0) return arr;
  const rotations = n % arr.length;
  // Reverse the first part (0 to len - rotations)
  reverse(arr, 0, arr.length - rotations - 1);
  // Reverse the second part (arr.length() - rotations to arr.length() - 1)
  reverse(arr, arr.length - rotations, arr.length - 1);
  // Reverse the entire array
  reverse(arr, 0, arr.length - 1);
  return arr;
}
function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Example usage:
const originalArray = [0, 1, 2, 4, 5, 6, 7];
const rotations = 4;
const rotatedArray = rotateNtimes(originalArray, rotations);
console.log(rotatedArray); // Output: [4, 5, 6, 7, 0, 1, 2]
