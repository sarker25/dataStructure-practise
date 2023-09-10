let input = "5 9\n10 8 14 3 10";
let inputs = input.split("\n");
let n = parseInt(inputs[0].split(" ")[0]);
let k = parseInt(inputs[0].split(" ")[1]);
let arr = inputs[1].split(" ").map((x) => parseInt(x));
function countTheMissing(arr, k) {
  arr.sort((a, b) => a - b);
  let missing = 0;
  for (let i = 1; i < k; i++) {
    if (!arr.includes(i)) {
      missing++;
    }
  }
  console.log(missing);
}

countTheMissing(arr, k);
