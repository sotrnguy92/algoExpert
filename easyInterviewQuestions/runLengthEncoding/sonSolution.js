function runLengthEncoding(string) {
    const encoding = ["1"+string[0]]

    for (let i =1; i < string.length; i++) {
        let count = parseInt(encoding[encoding.length-1][0]);
        if (string[i] !== encoding[encoding.length-1][1] || encoding[encoding.length-1][0] === "9"){
            count = 1;
            encoding.push(count.toString()+string[i])
        }else if(string[i] === encoding[encoding.length-1][1]){
            count++;
            encoding[encoding.length-1] = count.toString()+string[i];
        }
    }
    return encoding.join("");
}


const str = ";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s"

runLengthEncoding(str);
console.log(runLengthEncoding(str))