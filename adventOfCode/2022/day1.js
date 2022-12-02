const getData = require('./getData');
// Get input from day.txt
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

const input = getData('day1.txt').split('\n');
if(input.length > 1) console.log(calorieCounting(input)); // Part one element one, Part Two element two



/**
 *
 *
By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.

To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
 *
 */