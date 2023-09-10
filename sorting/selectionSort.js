let input = "5\n10 8 14 3 10";
let inputs = input.split("\n");
let items = inputs[1].map((item) => parseInt(item));
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }   
    }
    if (i !== min_index) {
      swap(arr, i, min_index);
    }
  }
  console.log(arr);
}
selectionSort([8, 1, 2, 3, 4, 5, 6, 7]);
