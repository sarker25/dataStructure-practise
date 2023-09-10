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
  for (let val of Object.entries(map)) {
    sorted.push(val);
  }
  return sorted.map((x) => x[0]).join(" ");
}
console.log(countingSort(arr));
