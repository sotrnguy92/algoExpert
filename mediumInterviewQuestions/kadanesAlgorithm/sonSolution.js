function kadanesAlgorithm(array) {
    let maxSum =0;
    let tempSum = 0;

    if(array.every((value) => value<0)){
        return Math.max(...array);
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0){
            tempSum += array[i];
        }else if (tempSum + array[i] > 0){
            tempSum += array[i];
        }else{
            tempSum =0
        }
        if( tempSum > maxSum){
            maxSum = tempSum;
        }
    }

    return maxSum;
}

kadanesAlgorithm([3, 4, -6, 7, 8, -18, 100])