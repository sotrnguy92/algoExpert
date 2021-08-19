function isMonotonic(array) {
    let increasing = false;
    let decreasing = false;

    for (let i =1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
          decreasing = true;
      }else if (array[i] > array[i - 1]) {
          increasing = true;
      }
  }
    if (increasing && decreasing){
        return false
    }else{
        return true;
    }
}

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
console.log(isMonotonic(array))
