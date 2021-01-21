function twoNumberSum(array, targetSum) {
  // Write your code here.
	const finalArr = [];
	const hashedArray = {};
	for (let i = 0; i < array.length; i ++) {
		if (!hashedArray[array[i]]) {
			hashedArray[array[i]] = 1
		} else {
			hashedArray[array[i]]++
		}
	}
	for (let i = 0; i < array.length; i ++) {
		hashedArray[array[i]]--
		let difference = targetSum - array[i];
		if (hashedArray[difference]) {
			finalArr.push(difference, array[i])
		}
	}
	return finalArr;
}
