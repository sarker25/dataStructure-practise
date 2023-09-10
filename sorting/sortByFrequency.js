let input = "3\n1 2 2";
let inputs = input.split("\n");
let n = parseInt(inputs[0]);
let arr = inputs[1].split(" ").map((x) => parseInt(x));
function sortByFrequency(arr) {
  let frequency = {};
  for (let i in arr) {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  }
  let arr2 = [];
  for (let arr of Object.entries(frequency)) {
    arr2.push(arr);
  }
  arr2.sort((a, b) => b[1] - a[1]);
  let string = "";
  for (let i in arr2) {
    string += arr2[i][0] + " ";
  }
  console.log(string);
}
sortByFrequency(arr);
