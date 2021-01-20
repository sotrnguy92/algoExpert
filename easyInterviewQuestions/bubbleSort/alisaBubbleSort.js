function bubbleSort(array) {
  // Write your code here.
  let bubble = [...array];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      array.splice(i, 2, array[i+1], array[i])
    }
  }
  if (bubble.join('') === array.join('')) {
    return bubble;
  } else {
    return bubbleSort(array)
  }

}

let array = [8, 5, 2, 9, 5, 6, 3];

console.log(bubbleSort(array));
