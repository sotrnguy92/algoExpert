function twoNumberSum(array, targetSum) {

    let hash = {};

    for (let i = 0; i < array.length; i++) {
        if( hash[targetSum-array[i]]){
            return [array[i], targetSum-array[i]];
        }
        else{
            hash[array[i]] = true;
        }
    }
    return [];
}
