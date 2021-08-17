function arrayOfProducts(array) {
    const result = [];

    const leftArray = [1];
    const rightArray = [];
    rightArray[array.length - 1] = 1

    for (let i = 1; i < array.length; i++) {
        leftArray[i] = leftArray[i-1] * array[i-1];
    }

    for (let i = array.length -2; i >= 0; i--) {
        rightArray[i] = rightArray[i+1] * array[i+1]
    }

    for (let i=0; i < array.length; i++) {
        result[i] = leftArray[i] * rightArray[i];
    }

    return result;
}

const array = [5, 1, 4, 2]

console.log(arrayOfProducts(array))




