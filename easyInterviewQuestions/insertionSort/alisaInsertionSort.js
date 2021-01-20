function insertionSort(array) {
  // Write your code here.
  const insertion = [];
  for (let i = 0; i < array.length; i++) {
    if (insertion.length === 0) {
      insertion.push(array[i])
    } else {
      for (let j = insertion.length - 1; j > -1; j--) {
        if (insertion[j] > array[i]) {
          insertion.splice(j, 2, array[i], insertion[j]);
          console.log("in first if", insertion)
        } else {
          insertion.splice(j, 2, insertion[j], array[i]);
          console.log("in the else", insertion)
          break;
        }
      }
    }
  }
  return insertion;
}

const array = [8, 5, 2, 9, 5, 6, 3]
console.log(insertionSort(array));
