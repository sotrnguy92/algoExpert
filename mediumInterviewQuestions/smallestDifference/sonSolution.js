function smallestDifference(arrayOne, arrayTwo) {

    arrayTwo.sort((a,b)=> a-b);

    let minDifference = Math.abs(arrayOne[0] - arrayTwo[0]);
    let firstMin = arrayOne[0];
    let secondMin = arrayTwo[0];

    for (let i=0; i< arrayOne.length; i++){
        const firstValue = arrayOne[i];
        for (let j = 0; j< arrayTwo.length; j++ ){
            const secondValue = arrayTwo[j];
            if (Math.abs(firstValue - secondValue)>= minDifference && secondValue > 0 && secondValue >= firstValue){
                break;
            }else if (Math.abs(firstValue - secondValue)< minDifference){
                minDifference = Math.abs(firstValue - secondValue)
                firstMin = arrayOne[i];
                secondMin = arrayTwo[j];
            }
        }
    }
    console.log(arrayOne)
    console.log(arrayTwo)

    return [firstMin, secondMin]
}


const arrayOne = [240, 124, 86, 111, 2, 84, 954, 27, 89];
const arrayTwo = [1, 3, 954, 19, 8];

console.log(smallestDifference(arrayOne, arrayTwo) )
