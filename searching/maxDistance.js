let input = "2\n1 1\n1 1";
let inputs = input.split("\n");
let length = parseInt(inputs[0]);
let points = [];
for (let i = 1; i < inputs.length; i++) {
  let [x, y] = inputs[i].split(" ");
  points.push([parseInt(x), parseInt(y)]);
}

function euclideanDistance(point1, point2) {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}
function findMaxDistanceSquared(points) {
  let maxDistanceSquared = 0;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distanceSquared = euclideanDistance(points[i], points[j]) ** 2;
      maxDistanceSquared = Math.max(maxDistanceSquared, distanceSquared);
    }
  }

  return Math.round(maxDistanceSquared);
}

console.log(findMaxDistanceSquared(points));
