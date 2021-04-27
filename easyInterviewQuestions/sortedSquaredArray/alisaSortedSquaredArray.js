function sortedSquaredArray(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    array[i] *= array[i]
  }
  return array.sort((a,b) => a - b);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sortedSquaredArray(array))
