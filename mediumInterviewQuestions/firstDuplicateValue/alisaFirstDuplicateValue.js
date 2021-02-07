function firstDuplicateValue(array) {
  // Write your code here.
  const hash = {};
  let value = -1;
  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1
    } else {
      hash[array[i]]++
    }
    if (hash[array[i]] === 2) {
      return array[i];
    }
  }
  return value;
}

const array = [2, 1, 5, 3, 3, 2, 4];
console.log(firstDuplicateValue(array));
