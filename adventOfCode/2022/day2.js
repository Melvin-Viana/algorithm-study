const getData = require('./getData');

const input = getData('day2.txt');

const rockPaperScissors = (input,codes) => {
  let score = 0;

  for (let line of input) {
    line = line.split(' ')
    let opponentChoice = line[0];
    let yourChoice = line[1]
    score += codes[opponentChoice][yourChoice];
  }
  return score;
};



/**
 *
 * A for Rock, B for Paper, and C for Scissors
 * Second Colu
 */
 const partOneCodes =  {
  'A': {
    'X' : 4,
    'Y' : 8,
    'Z' : 3
  },
  'B': {
    'X': 4,
    'Y': 8,
    'Z': 3
  },
  'C': {
    'X': 1,
    'Y': 5,
    'Z': 9
  }
}

const partTwoCodes = {
  'A' : {
    'X' : 3, // 0 + 3
    'Y' : 4, // 3 + 1
    'Z' : 8  // 6 + 2
  },
  'B' : {
    'X' : 1, // 0 + Rock,
    'Y' : 5, //3 + Paper
    'Z' : 9  //6 + Scissors
  }, 'C' : {
    'X' : 2, //0 + Paper
    'Y' : 6, //3 + Scissors
    'Z' : 7, //6 + Rock
  }
}
console.log(rockPaperScissors(input.split('\n'), partOneCodes));
console.log(rockPaperScissors(input.split('\n'), partTwoCodes));
