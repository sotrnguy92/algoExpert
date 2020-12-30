function isPalindrome(string) {
  return (string.split("").reverse().join("") === string);
}

const string = "abcdcba"

console.log(isPalindrome(string))
