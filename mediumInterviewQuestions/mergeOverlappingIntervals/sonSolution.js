function mergeOverlappingIntervals(array) {
    array.sort((a,b) => a[0] - b[0]);

    for(let i = 0; i < array.length-1; i++) {
        const merged = mergeIntervals(array[i],array[i+1]);
        if (merged){
            array.splice(i,2,merged);
            i--
        }
    }
    return array;
}

function mergeIntervals(array1, array2){

    if ((array1[0] <= array2[0] && array1[1] >= array2[0]) || (array2[0] <= array1[0] && array2[1] >= array1[0])){
        return [Math.min(array1[0], array2[0]), Math.max(array1[1],array2[1])]
    }

}

const array = [
    [89, 90],
    [-10, 20],
    [-50, 0],
    [70, 90],
    [90, 91],
    [90, 95]
]

console.log(mergeOverlappingIntervals(array));