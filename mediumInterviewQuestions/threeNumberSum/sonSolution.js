function threeNumberSum(array, targetSum) {
    const tripletSum = [];

    array.sort((a,b)=>a-b);

    array.forEach((value) =>{
        const firstValue = value;
        const secondToThirdHash = {};

        for (let i = 0; i < array.length; i++) {
            if(array[i] !== firstValue){
                secondToThirdHash[array[i]] = targetSum - firstValue - array[i];
            }
        }

        for (let i = 0; i < array.length; i++) {
            const secondValue = array[i];
            const thirdValue = secondToThirdHash[array[i]];

            if((secondToThirdHash[thirdValue] || secondToThirdHash[thirdValue]===0) && thirdValue > secondValue && secondValue > firstValue){
                tripletSum.push([firstValue,secondValue, thirdValue]);
            }
        }
    })

    return tripletSum;
}

const array = [12, 3, 1, 2, -6, 5, -8, 6]

threeNumberSum(array, 0);

