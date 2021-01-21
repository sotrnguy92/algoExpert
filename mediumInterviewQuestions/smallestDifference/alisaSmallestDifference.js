function smallestDifference(arrayOne, arrayTwo) {
  const sortedOne = arrayOne.sort((a, b) => a-b);
  const sortedTwo = arrayTwo.sort((a, b) => a-b);
  let difference, array;
  let iOne = 0;
  let iTwo = 0;
  while (arrayOne[iOne] ||arrayTwo[iTwo]) {
    if (difference === undefined || Math.abs(sortedOne[iOne] - sortedTwo[iTwo]) < difference) {
      difference = Math.abs(sortedOne[iOne] - sortedTwo[iTwo])
      array = [sortedOne[iOne], sortedTwo[iTwo]]
    }
    if (difference !== 0 && sortedOne[iOne] > sortedTwo[iTwo]) {
      iTwo++
    } else if (difference !== 0 && sortedOne[iOne] < sortedTwo[iTwo]) {
      iOne++
    } else {
      return array;
    }
  }
  return array;
}

// function smallestDifference(arrayOne, arrayTwo) {
//   const sortedOne = arrayOne.sort((a, b) => a-b);
//   const sortedTwo = arrayTwo.sort((a, b) => a-b);
//   let difference, array;
//   for (let i = 0; i < sortedOne.length; i++) {
//     for (let j = 0; j < sortedTwo.length; j++) {
//       if (difference === undefined || Math.abs(sortedOne[i] - sortedTwo[j]) < difference) {
//         difference = Math.abs(sortedOne[i] - sortedTwo[j])
//         array = [sortedOne[i], sortedTwo[j]]
//       }
//     }
//   }
//   return array;
// }

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];

console.log(smallestDifference(arrayOne, arrayTwo) )
