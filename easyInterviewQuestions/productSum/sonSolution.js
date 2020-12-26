// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.

function productSum(array, depth =1) {
    let sum = 0;
    for (let i = 0; i <array.length; i++) {
        if(Array.isArray(array[i])){
            sum = sum + productSum(array[i], depth+1)
        }else {

            sum = sum + array[i];
        }
    }
    return depth*sum;
}

let array = [5,2,[7,-1], 3,[6,[-13,8],4]];

console.log(productSum(array));