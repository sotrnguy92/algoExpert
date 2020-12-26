function isValidSubsequence(array, sequence) {
    let hash = {};
    let checkArr = [];
    for (let i=0; i < sequence.length; i++ ) {
        hash[sequence[i]] = 1;
    }
    console.log(hash)
    for (let i  =0; i < array.length; i++){
        if(hash[array[i]]){
            checkArr.push(array[i]);
        }
    }
    console.log("I am check Arr", checkArr);
    for (let i = 0; i < sequence.length; i++){
        console.log(i)
        if (checkArr[i] !== sequence[i]){
            return false;
        }
    }
    return true;

}

let array = [5,1,22,25,6,-1,8,10];
let sequence = [1, 6, -1,8, 10]
console.log(isValidSubsequence(array, sequence));
