function isMonotonic(array) {
  // Write your code here.
  let i = 0;
  let increment = false;
  let decrement = false;
  while (array[i]) {
    if (array[i] > array[i+1]) {
      decrement = true;
    }
    if (array[i] < array[i+1]) {
      increment = true;
    }
    i++
  }
  if (decrement && increment) {
    return false;
  } else {
    return true;
  }
}

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
console.log(isMonotonic(array))
