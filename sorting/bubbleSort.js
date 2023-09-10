function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let count = 0;
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
      count++;
    }
    if (noSwap) {
      break;
    }
  }

  console.log(arr);
  console.log(count);
}
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
