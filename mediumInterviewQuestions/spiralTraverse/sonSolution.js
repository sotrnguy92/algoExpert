function spiralTraverse(array,firstRow = 0,lastRow = array.length - 1,firstCol = 0,lastCol = array[0].length - 1) {

    const spiralArray = [];

    if (firstRow === lastRow){
        for (let i=firstCol; i <= lastCol; i++) {
            spiralArray.push(array[firstRow][i])
        }
        return spiralArray;
    }

    if (firstCol === lastCol){
        for (let j = firstRow; j <= lastRow; j++){
            spiralArray.push(array[j][lastCol])
        }
        return spiralArray;
    }

    for (let i=firstCol; i <= lastCol; i++) {
        spiralArray.push(array[firstRow][i])
    }

    for (let j = firstRow+1; j <= lastRow; j++){
        spiralArray.push(array[j][lastCol])
    }

    for(let k = lastCol-1; k >= firstCol; k--){
        spiralArray.push(array[lastRow][k])
    }

    for(let l = lastRow -1; l >= firstRow+1; l--){
        spiralArray.push(array[l][firstCol])
    }
    console.log(firstRow+1)
    console.log(lastRow-1)

    if(firstRow +1 > lastRow-1 || firstCol +1 > lastCol -1 ){
        return spiralArray;
    }else {
        return spiralArray.concat(spiralTraverse(array, firstRow+1,lastRow-1, firstCol+1, lastCol-1))
    }
}



const ar = [
    [1, 3, 2, 5, 4, 7, 6]
]
console.log(spiralTraverse(ar));