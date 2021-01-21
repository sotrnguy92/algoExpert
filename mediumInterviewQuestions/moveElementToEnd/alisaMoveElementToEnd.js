// redo this one later
function moveElementToEnd(array, toMove) {
  // Write your code here.
  let i = 0;
  let count = 0;
  while (array[i]) {
    if (array[0] === toMove) {
      count++
      array.splice(0, 1);
    }
    i++
  }
  for (let i = 0; i < count; i++) {
    array.push(toMove);
  }
  return array;
}

const array = [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]
const toMove = 5
console.log(moveElementToEnd(array, toMove))
