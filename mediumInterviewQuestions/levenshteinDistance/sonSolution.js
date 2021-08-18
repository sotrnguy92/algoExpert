function levenshteinDistance(str1, str2) {
    const matrixArr = []
    for (let i =0 ; i <= str2.length ; i++) {
        const row = []
        for (let j = 0; j <= str1.length; j++){
            if(i===0){
                row[j] = j;
            }else if( j === 0){
                row[j] = i;
            } else if (str1[j-1] === str2[i-1]){
                row[j] = matrixArr[i-1][j-1];
            }else {
                row[j] = Math.min(matrixArr[i-1][j-1], matrixArr[i-1][j],row[j-1])+1
            }
        }
        matrixArr[i] = row
    }

    return matrixArr[str2.length][str1.length];
}


console.log(levenshteinDistance("duck", 'dark'));


