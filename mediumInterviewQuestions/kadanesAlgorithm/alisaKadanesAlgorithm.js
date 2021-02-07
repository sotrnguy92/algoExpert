function kadanesAlgorithm(array) {
  // Write your code here.
  let sum = 0;
  let temp = 0;
  let highestInt;
  let positive = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positive = true;
    }
    if (i === 0) {
      highestInt = array[i]
    } else if (array[i] > highestInt) {
      highestInt = array[i]
    }
    if (positive) {
      break;
    } else if (i === array.length - 1) {
      return highestInt
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      temp += array[i];
    } else if (array[i] < 0 && array[i] + temp > 0) {
      temp += array[i];
    } else {
      temp = 0;
    }
    if (temp > sum) {
      sum = temp;
    }
  }

  return sum;
}

const array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
// const array = [
//   8, //3, 5,
//   -9,
//   4, //1, 3, START
//   -2,
//   16, //3, 4, 7, 2,
//   -9,
//   10, //6, 3, 1, END
//   -5,
//   4
// ]

console.log(kadanesAlgorithm(array))

