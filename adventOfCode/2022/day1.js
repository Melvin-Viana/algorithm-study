const getData = require('./getData');
// Get input from day.txt

//TODO: HEAP - https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65?gi=1e4a61fab4f8
const getTopThree = (calorieVal, topThree) => {
  if(topThree[0] <= calorieVal) {
    topThree[2] = topThree[1];
    topThree[1] = topThree[0];
    topThree[0] = calorieVal;
  } else if (topThree[1] <= calorieVal) {
    topThree[2] = topThree[1]
    topThree[1] = calorieVal;
  } else if (topThree[2] <= calorieVal) {
    topThree[2] = calorieVal;
  }
  return topThree
}

const calorieCounting = (input) => {
  let ans = Number.MIN_SAFE_INTEGER;
  let second = ans;
  let third = ans;
  let curr = 0;
  for (let calorie of input) {
    if(calorie==='') {
      [ans, second, third] = getTopThree(curr, [ans,second, third]);
      curr = 0;
    }
    else curr += Number(calorie)
  }
  return {'partOne':ans, 'partTwo': [ans, second, third].reduce((a,b)=>a+b, 0)};
}

const input = getData('day1.txt', calorieCounting).split('\n');
