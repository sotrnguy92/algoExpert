function longestPeak(array) {
    let tip = false;
    let wasThereTip = false;
    let maxPeakLength = 1;
    let tempPeakLength = 1;

    for (let i=1; i< array.length; i++) {
        if (array[i+1]<array[i] && array[i]>array[i-1]){
            if (!tip){
                tip = true
                wasThereTip =true;
                tempPeakLength ++;
            }else{
                tempPeakLength =2;
            }
        }else if (array[i]>array[i-1] && tip){
            tip = false;
            tempPeakLength = 2;
        }else if (array[i]<array[i-1] && tip){
            tempPeakLength ++;
        }else if (array[i] > array[i-1]){
            tempPeakLength ++;
        }else if (array[i] === array[i-1]){
            tip = false
            tempPeakLength =1;
        }
        if (tempPeakLength > maxPeakLength){
            maxPeakLength = tempPeakLength;
        }
    }

    if (!wasThereTip){
        maxPeakLength =0;
    }
    return maxPeakLength;
}

const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
console.log(longestPeak(array))
