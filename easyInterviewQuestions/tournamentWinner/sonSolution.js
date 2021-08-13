function tournamentWinner(competitions, results) {
  const hash = {};
  let winner = '';
  let winningScore = 0;
  for (let i = 0; i < results.length; i++) {
    if (results[i] === 0){
      if (hash[competitions[i][1]]){
        hash[competitions[i][1]] += 3;
      }else{
        hash[competitions[i][1]] = 3;
      }
      if (hash[competitions[i][1]] > winningScore){
        winner = competitions[i][1];
        winningScore = hash[competitions[i][1]];
      }
    }else{
      if (hash[competitions[i][0]]){
        hash[competitions[i][0]] += 3;
      }else{
        hash[competitions[i][0]] = 3;
      }
      if (hash[competitions[i][0]] > winningScore){
        winner = competitions[i][0];
        winningScore = hash[competitions[i][0]];
      }
    }

  };
  return winner;
}

let comp = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
];

let results = [0, 0, 1];

tournamentWinner(comp, results);