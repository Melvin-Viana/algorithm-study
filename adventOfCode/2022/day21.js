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
let [left, right] = getHoomanVal(copy,[...queue])
let target = left - right;
let low =0;
let high = 100000000000000;
let mid
//Binary Serach
while(left !== right) {
  copy = {...monkeyVals}
  mid = Math.floor((high-low)/2);
  console.log(mid)
  copy['humn'] = mid;
  [left, right] = getHoomanVal(copy,[...queue])
  //GO higher
  console.log(left,right)
  if(left < right) {
    low = mid+1;
  } else {
    //Go lower
    high = mid-1;
  }
  console.log(low,high)
}
const paths = {
  'pvgq':'',
  'ngpl':''
}
// // const paths = []
// let i = 0;
const findEndOfPath = (name, visited={}, path=name, parent=name) => {
  if(visited[name] || typeof monkeyVals2[name] === 'number') {
    if(paths[parent].length < path.length && name === 'humn') paths[parent] = path;
    if(parent === 'ngpl' && paths[parent].length < path.length) paths[parent] = path
    return;
  }
  visited[name] = true;
  findEndOfPath(monkeyVals2[name].monkey1, {...visited}, path+','+monkeyVals2[name].monkey1,parent)
  findEndOfPath(monkeyVals2[name].monkey2, {...visited}, path+','+monkeyVals2[name].monkey2,parent)
}
// // console.log(monkeyVals2['root'])


// let target = monkeyVals[monkeyVals2['root'].monkey2];
queue.push({name:monkeyVals2['root'].monkey1,depth:0})

let dontGohere = new Set(paths['pvgq'].split(','))
let currDepth = 0;

//Do binary search for solution
