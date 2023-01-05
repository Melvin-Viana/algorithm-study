const monkeyOps = require('./getData')('day21.txt').split('\n');

const queue = [];
const monkeyVals = {};
let monkeyVals2 = {};

for(let monkey of monkeyOps) {
  const [name, op] = monkey.split(':')
  if(op.split(' ').length === 2) {
    monkeyVals[name] = Number(op)
    monkeyVals2[name] = Number(op)
  } else {
    const [_, monkey1, expression, monkey2] = op.split(' ');
    queue.push({
      name,
      monkey1,
      monkey2,
      expression,
    })

    monkeyVals2[name] = {monkey1, monkey2, expression}

  }
}
const getHoomanVal = (monkeyVals, queue) => {
  while (queue.length) {
    //Find if both monkeys are in the monkeyVals dont push back to queue
    const {name, monkey1, monkey2, expression, hitsHuman} = queue.shift();
    if(monkey1 in monkeyVals && monkey2 in monkeyVals) {

      const val1 = monkeyVals[monkey1]
      const val2 = monkeyVals[monkey2]
      const yellOut = eval(`${val1} ${expression} ${val2}`);
      monkeyVals[name] = Number(yellOut);
      if(name === 'root') {
        // console.log(yellOut)
        partTwo = [val1, val2, monkey1,monkey2];
        break;
      }
    } else {
      queue.push({
        name,
        monkey1,
        monkey2,
        expression
      });
    }
  }
  return [monkeyVals['pvgq'] , monkeyVals['ngpl']]
}
let copy = {...monkeyVals}
let [left, right] = getHoomanVal({...copy},[...queue])
console.log(left,right)
let low = 0;
let high = Math.abs(right-left);
let mid = Math.floor((high-low)/2) + low
//Binary search
while(left !== right) {
  copy = {...monkeyVals}
  copy['humn'] = mid;
  [left, right] = getHoomanVal(copy,[...queue]);
  if(left > right) {
    low = mid + 1;
  } else if (left< right) {
    high = mid -1;
  }
  mid = Math.floor((high-low)/2) + low;
}
 
console.log(mid);