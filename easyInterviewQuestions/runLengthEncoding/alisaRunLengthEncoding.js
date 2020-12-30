function runLengthEncoding(string) {
  // Write your code here.
  let arr = [];
  const hash = {};
  for (let i = 0; i < string.length; i++) {
    if (hash[string[i]]) {
      hash[string[i]]++;
    } else {
      hash[string[i]] = 1
    }
    if (i === string.length - 1) {
      console.log(hash);
      for (const [key, value] of Object.entries(hash)) {
        if (value > 9) {
          for (let i = value; i > 0; i-=9) {
            if (i < 9) {
              arr.push(`${i}${key}`);
            } else {
              arr.push(`9${key}`);
            }
          }
        } else {
          arr.push(`${value}${key}`);
        }
      }
    }
  }
  return arr.join('');
}

const string = "AAAAAAAAAAAAABBCCCCDD"

console.log(runLengthEncoding(string));
