function sortedSquaredArray(array) {
  // Write your code here.
  return array.map(x => x**2).sort((a,b) => a-b);
}

// function sortedSquaredArray(array) {
//   // Write your code here.
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= array[i]
//   }
//   return array.sort((a,b) => a - b);
// }
