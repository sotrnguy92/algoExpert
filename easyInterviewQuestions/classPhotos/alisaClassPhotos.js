function classPhotos(redShirtHeights, blueShirtHeights) {
  let sortedRed = redShirtHeights.sort((a,b) => a-b)
  let sortedBlue = blueShirtHeights.sort((a,b) => a-b)
  let redTaller, blueTaller;
  for (let i = 0; i < sortedRed.length; i++) {
    (sortedRed[i] < sortedBlue[i]) ? blueTaller = true : blueTaller = false;
    if (blueTaller === false) {
      break;
    }
  }
  for (let i = 0; i < sortedRed.length; i++) {
    (sortedBlue[i] < sortedRed[i]) ? redTaller = true : redTaller = false;
    if (redTaller === false) {
      break;
    }
  }
  return redTaller || blueTaller;
}

let blueShirtHeights = [2, 4, 7, 5, 1]
let redShirtHeights = [3, 5, 6, 8, 2]

console.log(classPhotos(redShirtHeights, blueShirtHeights))
