function merge(left, right) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  return merged.concat(left.slice(i), right.slice(j));
}
function sortArray(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(sortArray(left), sortArray(right));
}

console.log(
  sortArray([
    64, 4, 9, 6, 698, 469, 46, 1, 6549, 8769, 4, 651, 654, 984, 651, 65, 4,
    9874, 654, 654, 984, 65, 415, 4, 897, 894, 651, 987, 98, 46, 54, 654, 56,
    46, 54, 654, 654, 65, 5465, 4, 874, 564, 5644, 85, 4, 4, 54, 54, 654, 64,
    65, 4, 94, 64, 61, 987, 9874, 651, 564, 9874, 961, 6, 198, 749, 46, 1,
  ]).join(" ")
);
// 1 2 3 5
