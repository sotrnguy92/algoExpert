function tournamentWinner(competitions, results) {
  // Write your code here.
  let hash = {};
  let winner = '';
  let score = 0;
  for (let i = 0; i < competitions.length; i++) {
    if (!hash[competitions[i][0]]) {
      hash[competitions[i][0]] = 0;
    }
    if (!hash[competitions[i][1]]) {
      hash[competitions[i][1]] = 0;
    }
  }
  for (let i = 0; i < competitions.length; i++) {
    if (competitions[i][0] && results[i] === 1) {
      hash[competitions[i][0]] += 3;
    } else {
      hash[competitions[i][1]] += 3;
    }
  }
  for (const [key, value] of Object.entries(hash)) {
    if (value > score) {
      score = value;
      winner = key;
    }
  }
  console.log(hash)
}

let competitions = [
    ["Bulls", "Eagles"],
    ["Bulls", "Bears"],
    ["Bears", "Eagles"]
  ];
let results = [0,0,0]
tournamentWinner(competitions, results)
