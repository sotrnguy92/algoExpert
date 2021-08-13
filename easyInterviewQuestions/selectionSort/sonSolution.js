function selectionSort(array) {

    const sorted = [];
    const unsorted = array;
    while (unsorted.length > 0){
        let index_of_lowest = 0;
        for (let i =0; i <array.length; i++) {
            if (unsorted[i] < unsorted[index_of_lowest]){
                index_of_lowest = i;
            }
        }
        sorted.push(unsorted[index_of_lowest]);
        unsorted.splice(index_of_lowest, 1);
    }

    return sorted;
}
