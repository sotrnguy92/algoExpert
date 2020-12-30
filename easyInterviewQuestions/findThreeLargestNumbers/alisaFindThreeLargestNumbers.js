function findThreeLargestNumbers(array) {
  // Write your code here.
  const largest = [];
  for (let i = 0; i < array.length; i++) {
    if (largest.length < 3) {
      largest.push(array[i])
    } else {
      for (let j = 0; j < largest.length; j++) {
        if (array[i] > largest[j]) {
          largest.splice(j, 1, array[i])
          array.splice(i, 1)
        }
      }
    }
  }
  return largest.sort((a, b) => a - b); //this is not sorting the input array
}

const array = [10, 5, 9, 10, 12]

console.log(findThreeLargestNumbers(array));
