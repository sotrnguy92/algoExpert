function isValidSubsequence(array, sequence) {
  // Write your code here.
	const sharedArr = [];
	for (let i = 0; i < array.length; i++) {
		if (sequence.includes(array[i])) {
			sharedArr.push(array[i])
		}
	}
	for (let i = 0; i < sequence.length; i++) {
		if (sequence[i] !== sharedArr[i]) {
			return false;
		}
	}
	return true;
}

