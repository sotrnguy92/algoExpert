function firstNonRepeatingCharacter(string) {
  let hash = {};
  for (let i = 0; i < string.length; i++) {
    if (!Number.isInteger(hash[string[i]])) {
      hash[string[i]] = i
    } else {
      hash[string[i]] = -1
    }
  }
  let values = Object.values(hash).sort((a,b) => a - b)
  let value = -1;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > -1) {
      value = values[i];
      break;
    }
  }
  return value;
}

let string = "lmnopqldsafmnopqsa";
console.log(firstNonRepeatingCharacter(string))
