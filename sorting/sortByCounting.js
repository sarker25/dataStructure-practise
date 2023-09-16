function countingSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Find the maximum value in the array
  let maxVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }

  // Create a counting array to store the frequency of each value
  const count = new Array(maxVal + 1).fill(0);

  // Count the occurrences of each value in the input array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Create an output array to store the sorted values
  const output = [];

  // Reconstruct the sorted array from the counting array
  for (let i = 0; i <= maxVal; i++) {
    while (count[i] > 0) {
      output.push(i);
      count[i]--;
    }
  }

  return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr);
