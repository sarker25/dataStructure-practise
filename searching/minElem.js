function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] < nums[right]) {
      return nums[left];
    }
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

// Example usage:
const nums = [11, 13, 15, 17]; // Example input
const min = findMin(nums);
console.log("Minimum element:", min); // Output: Minimum element: 0
