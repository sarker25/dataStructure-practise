let input = "5\n10 8 14 3 10";
let inputs = input.split("\n");
let n = parseInt(inputs[0]);
let arr = inputs[1].split(" ").map((x) => parseInt(x));
function countingSort(arr) {
  let map = {};
  for (val of arr) {
    map[val] = map[val] ? map[val] + 1 : 1;
  }
  let sorted = [];
  let sortByKeys = Object.keys(map).sort((a, b) => a - b);
  for (key of sortByKeys) {
    for (let i = 0; i < map[key]; i++) {
      sorted.push(parseInt(key));
    }
  }
  console.log(sorted.join(" "));
}
countingSort(arr);
// time limit exceed
// function countingSort(arr) {
//   let map = {};
//   for (val of arr) {
//     map[val] = map[val] ? map[val] + 1 : 1;
//   }
//   let sorted = [];

//   for (let i = 0; i < arr.length; i++) {
//     let min = Math.min(...arr);
//     sorted.push(min);
//     arr.splice(arr.indexOf(min), 1);
//   }
//   console.log(sorted.join(" "));
// }
// countingSort(arr);
