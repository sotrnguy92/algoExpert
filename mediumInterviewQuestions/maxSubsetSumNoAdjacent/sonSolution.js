function maxSubsetSumNoAdjacent(array) {
    let maxSum =0
    let sumArray = []
    sumArray[0] = array[0]
    sumArray[1] = array[1]
    if (array.length <2){
        array[0] ?  maxSum = array[0] : maxSum = 0;
        return maxSum
    }
    for (let i=2; i < array.length; i++) {
        sumArray[i] = array[i] + Math.max(sumArray[i-1] - array[i-1], sumArray[i-2]);
  }
    return Math.max(sumArray[array.length-1], sumArray[array.length-2]);
}

maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])