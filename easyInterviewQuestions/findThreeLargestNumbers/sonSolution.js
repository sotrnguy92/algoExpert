function findThreeLargestNumbers(array) {

    const top3 = [];
    for (let i =0; i<3; i++) {
        top3.push(array[i]);
    }

    for (let i=3; i<array.length; i++) {
        top3.sort((a, b) => a - b)
        const temp = top3.slice(0,3);
        for(let j=0; j<3; j++) {
            if (array[i]>top3[j] && temp.toString() === top3.toString()){
                top3[j] = array[i];
            }
        }
    }
    top3.sort((a, b) => a - b)
    return top3;
}

[141, 1, 17]
const arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

console.log(findThreeLargestNumbers(arr));