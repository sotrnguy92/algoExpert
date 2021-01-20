function minimumWaitingTime(queries) {
  const sortedQueries = queries.sort((a,b) => a-b);
  let totalWaitTime = 0;

  for (let i = 0; i <sortedQueries.length-1; i++) {
    totalWaitTime += sortedQueries[i]*(sortedQueries.length-i-1)
  }
  return totalWaitTime;
}


const queries = [3, 2, 1, 2, 6];

console.log(minimumWaitingTime(queries))
