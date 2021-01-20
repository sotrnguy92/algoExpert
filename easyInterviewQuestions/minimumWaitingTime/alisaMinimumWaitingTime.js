function minimumWaitingTime(queries) {
  // Write your code here.
  const sorted = queries.sort((a, b) => a - b)
  let waitingTime = 0;
  let accumulated = 0;
  for (let i = 0; i < sorted.length -1 ; i++) {
    accumulated+= sorted[i]
    waitingTime += accumulated;
  }
  return waitingTime;
}

const queries = [3, 2, 1, 2, 6];

console.log(minimumWaitingTime(queries))
