function caesarCipherEncryptor (string, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let cipher = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < 26; j++) {
      if (alphabet[j] === string[i]) {
        cipher += (j + key < 26 ? alphabet[j + key] : alphabet[(j + key) % 26]);
      }
    }
  }
  return cipher;
}

const string = "mvklahvjcnbwqvtutmfafkwiuagjkzmzwgf";
const key = 7;

console.log(caesarCipherEncryptor(string, key))
