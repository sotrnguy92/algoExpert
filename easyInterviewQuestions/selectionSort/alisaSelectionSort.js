function selectionSort(array) {
  // Write your code here.
  let sorted = [];
  let minimum, index;
  let count = array.length;
  while (count > 0) {
    for (let i = 0; i < array.length; i++) {
      if (minimum === undefined || minimum > array[i]) {
        minimum = array[i];
        index = i;
      }
      if (i === array.length - 1) {
        sorted.push(minimum);
        array.splice(index, 1)
        minimum = undefined;
        count--;
      }
    }
  }
  return sorted;
}

const array = [1, 3, 4, 8, 9, 0, 1, 4, 5]
console.log(selectionSort(array));
