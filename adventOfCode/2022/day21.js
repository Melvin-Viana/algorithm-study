const monkeyOps = require('./getData')('day21.txt').split('\n');

const queue = [];
const monkeyVals = {};

//Parse Data
for(let monkey of monkeyOps) {
  const [name, op] = monkey.split(':')
  if(op.split(' ').length === 2) {
    monkeyVals[name] = Number(op)
  } else {
    const [_, monkey1, expression, monkey2] = op.split(' ');
    queue.push({
      name,
      monkey1,
      monkey2,
      expression,
    })
  }
}

//BFS - Use eval to calculate each monkey
const solve = (monkeyVals, queue) => {
  while (queue.length) {
    //Find if both monkeys are in the monkeyVals dont push back to queue
    const {name, monkey1, monkey2, expression} = queue.shift();
    if(monkey1 in monkeyVals && monkey2 in monkeyVals) {

      const val1 = monkeyVals[monkey1]
      const val2 = monkeyVals[monkey2]
      const yellOut = eval(`${val1} ${expression} ${val2}`);
      monkeyVals[name] = Number(yellOut);
    } else {
      queue.push({
        name,
        monkey1,
        monkey2,
        expression
      });
    }
  }
  return monkeyVals;
}

const getHoomanVal = (monkeyVals, queue) => {
  const ans = solve(monkeyVals, queue)
  return [ans['pvgq'] , ans['ngpl']]
}
// Get the root value
const partOne = (monkeyVals, queue)=> {
  const ans = solve(monkeyVals, queue)
  return ans['root'];
}

const partTwo = (monkeyVals, queue) => {
  let copy = monkeyVals;
  let [left, right] = getHoomanVal({...copy},[...queue])
  let low = 0;
  let high = Math.abs(right-left);
  let mid = Math.floor((high+low)/2);
  while(left !== right) {
    copy = {...monkeyVals}
    copy['humn'] = mid;
    [left, right] = getHoomanVal(copy,[...queue]);
    console.log(left,right)
    //if mid is too low look left
    if(left < right) {
      high = mid -1;
    } else if(left > right) low = mid + 1;
    mid = Math.floor((high+low)/2) ;
  }
  return mid;
}
console.log(partOne({...monkeyVals}, [...queue]))
console.log(partTwo({...monkeyVals}, [...queue]))