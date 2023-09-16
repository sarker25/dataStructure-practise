let input = "24";
let n = parseInt(input);
// naive approach
// function perfectSquare(n) {
//   let sqrt = 0;
//   while (sqrt * sqrt <= n) {
//     if (sqrt * sqrt === n) {
//       return true;
//     }
//     sqrt++;
//   }
//   return false;
// }

// binary search approach
function perfectSquare(n) {
  let left = 0;
  let right = n;
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    if (middle * middle === n) {
      return true;
    } else if (middle * middle < n) {
      left = middle + 1;
    } else if (middle * middle > n) {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return false;
}

console.log(perfectSquare(n));
