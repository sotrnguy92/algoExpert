function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  let sortedRed = redShirtSpeeds.sort((a, b) => a - b);
  let sortedBlue;
  let speed = 0;
  if (fastest) {
    sortedBlue = blueShirtSpeeds.sort(((a, b) => b - a));
  } else {
    sortedBlue = blueShirtSpeeds.sort(((a, b) => a - b));
  }
  for (let i = 0; i < sortedRed.length; i++) {
    speed += Math.max(sortedRed[i], sortedBlue[i])
  }
  return speed;
}

let redShirtSpeeds = [5, 5, 3, 9, 2]
let blueShirtSpeeds = [3, 6, 7, 2, 1]
let fastest = true

console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest))
