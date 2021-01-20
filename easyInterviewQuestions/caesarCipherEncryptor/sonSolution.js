function caesarCipherEncryptor(string, key) {
    const encryptedStringArr = [];
    for (let i = 0; i < string.length; i++) {
        const encoded = (string.charCodeAt(i)-97+key)%26

        if (encoded < 97){
            const encodedLetter = String.fromCharCode(encoded+97)
            encryptedStringArr.push(encodedLetter);
        }else{
            const encodedLetter = String.fromCharCode(encoded)
            encryptedStringArr.push(encodedLetter);
        }
    }
    return encryptedStringArr.join('');
}


console.log(caesarCipherEncryptor('abc', 52))