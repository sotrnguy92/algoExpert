function moveElementToEnd(array, toMove) {
    let theEnd = array.length-1;
    let endValue = array[theEnd];
    for (let i = 0; i < array.length; i++) {
        console.log(array)
        if (array[i] === toMove){
            if(endValue === toMove){
                theEnd --
                endValue = array[theEnd];
                i--;
            }else{
                array[theEnd] = array[i];
                array[i] = endValue;
                theEnd --;
                endValue = array[theEnd];
            }

        }
        if(theEnd === i){
            return array;
        }
    }
    return array
}

const array = [2, 1, 2, 2, 2, 3, 4, 2]
const toMove = 2
moveElementToEnd(array, toMove)
