function runLengthEncoding(string) {
  // Write your code here.
  let arr = [];
  const hash = {};
  for (let i = 0; i < string.length; i++) {
    if (!hash[string[i]]) {
      hash[string[i]] = 1
    } else {
      hash[string[i]]++
    }
    if (string[i] !== string[i+1]) {
      for (const [key, value] of Object.entries(hash)) {
        if (value > 9) {
          for (let i = value; i > 0; i -= 9) {
            (i < 9) ? arr.push(`${i}${key}`) : arr.push(`9${key}`);
          }
        } else {
          arr.push(`${value}${key}`);
        }
      }
      delete hash[string[i]];
    }
  }
  return arr.join('');
}

const string = "AAABBAABCCCCCCCCCCCCCCCCCCCCCCCCCDDD"

console.log(runLengthEncoding(string));
