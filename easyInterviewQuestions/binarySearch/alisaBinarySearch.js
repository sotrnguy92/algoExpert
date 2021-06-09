function binarySearch(array, target) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }
  return -1
}

let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
let target = 33
console.log(binarySearch(array,target))
