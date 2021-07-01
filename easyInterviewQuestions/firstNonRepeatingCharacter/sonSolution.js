function firstNonRepeatingCharacter(string) {
    const hash = {};
    for (let i =0; i < string.length; i ++){
        if (hash[string[i]]){
            hash[string[i]]++;
        }else{
            hash[string[i]] = 1;
        }
    }
    for (let i =0; i < string.length; i ++){
        if(hash[string[i]]===1){
            return i;
        }
    }
    return -1;
}

console.log( firstNonRepeatingCharacter("abcdcaf"));
