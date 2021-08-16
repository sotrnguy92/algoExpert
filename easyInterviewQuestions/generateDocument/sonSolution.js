function generateDocument(characters, document) {
    if(!document.length) {
        return true;
    }

    if (characters.length < document.length){
        console.log("in the second catch")
        return false;
    }

    const charHash = {};
    const docHash = {};

    for (let i = 0; i < characters.length; i++) {
        if(!charHash[characters[i]]){
            charHash[characters[i]] = 1;
        }else{
            charHash[characters[i]] ++;
        }
    }

    for (let i = 0; i < document.length; i++) {
        if(!docHash[document[i]]){
            docHash[document[i]] = 1;
        }else{
            docHash[document[i]] ++;
        }
    }

    for (const letter in docHash){
        if (docHash[letter] > charHash[letter] || !charHash[letter]){
            return false
        }
    }

    return true;
}

const characters= "Bste!hetsi ogEAxpelrt x"
const document = "AlgoExpert is the Best!"
console.log(generateDocument(characters, document))