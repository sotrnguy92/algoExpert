function insertionSort(array) {
    let sorted = [array[0]];

    for (let i =1; i < array.length; i++) {
        if (array[i] < sorted[0]){
            sorted = [array[i], ...sorted]
        }else if(array[i] >= sorted[sorted.length-1]){
            sorted.push(array[i]);
        }
        else{
            for (let j = 1; j < sorted.length; j++) {
                if (array[i] < sorted[j]){
                    sorted.splice(j,0,array[i]);
                    break;
                }
            }}

    }
    return sorted;
}



const array = [8, 5, 2, 9, 5, 6, 3]
console.log(insertionSort(array));

