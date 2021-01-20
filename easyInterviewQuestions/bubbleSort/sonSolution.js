function bubbleSort(array) {
    const sorted = [...array]
    for (let i = 0; i < sorted.length-1; i++) {
        if(sorted[i] > sorted[i +1]){
            const temp = sorted[i];
            sorted[i] = sorted[i + 1];
            sorted[i+1] = temp;
        }
    }
    console.log(sorted)
    if (JSON.stringify(array) === JSON.stringify(sorted)){
        return sorted;
    } else{
        return bubbleSort(sorted);
    }
}


const arr = [8, 5, 2, 9, 5, 6, 3];

console.log(bubbleSort(arr));