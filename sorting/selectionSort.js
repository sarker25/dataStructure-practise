const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
function selectionSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
      count++;
    }
    if (i !== min_index) {
      swap(arr, i, min_index);
    }
  }
  console.log(arr);
  console.log(count);
}
selectionSort([8, 1, 2, 3, 4, 5, 6, 7]);
