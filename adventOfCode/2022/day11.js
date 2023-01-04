const getData = require('./getData');
const bigInt = require('big-integer');

/**
To get your stuff back, you need to be able to predict where the monkeys will throw your items. After some careful observation,

    you realize the monkeys operate based on
    how worried you are about each item.

    Each monkey has a set of items

    Monkey 0 goes first, then monkey 1, and so on until each monkey has had one turn. The process of each monkey taking a single turn is called a round.

    Each round the monkey will choose to pass to another monkey depending on the formula


    Each item is  divided by three and rounded down to the nearest integer
      when it is passed

    Item is added to the end of the monkeys list
    20 rounds
*/

const partOne = (input) => {

  const monkeys = []

  // monkeys[0] = {
  //   'items' : [],
  //   'operation': undefined,
  //   'test': {
  //     'divisibleBy': undefined, // Boolean to pass to the monkey
  //     'true': undefined, // Which monkey
  //     'false' : undefined, // Which monkey
  //   }
  // }
  const filterNum = (str, replaceChar) => str.replace(/[\D]/g, replaceChar)
  for (let i = 0; i < input.length; i+=7) {
    // Monkey num
    const monkeyNumber = filterNum(input[i],'');

    //Items
    const items = filterNum(input[i+1], 'x').split('x').filter(char=>char!=='').map(Number)
    let operation = input[i+2].split('=')[1].split(' ').slice(1);
    operation = {
      'first': Number(operation[0]),
      'operator': operation[1],
      'second': Number(operation[2])
    }
    const divisibleBy = Number(filterNum(input[i+3], ''));
    const ifTrue = Number(filterNum(input[i+4], ''))
    const ifFalse = Number(filterNum(input[i+5], ''))

    const monkey = {
      monkeyNumber,
      items,
      operation,
      test : (val) => {
        if(val % divisibleBy === 0) return ifTrue;
        return ifFalse
      },
      inspected:0
    }
    monkeys.push(monkey)
  }
  const calcValue = (item, {operator, first, second}) => {
    if(isNaN(first)) first = item
    if(isNaN(second)) second = item
    if(operator === '*') {
      return first * second
    } else {
      return first + second;
    }
  }
  const oneRound = () => {
    for(let j = 0; j < monkeys.length; j++) {
      const currMonkey = monkeys[j];
      const {items, operation, test} = currMonkey
      let count = 0;
      for (let k = 0;  k < items.length; k++) {
        const currItem = items[k];
        const newValue = Math.floor(calcValue(currItem, operation)/3);
        const newMonkey = test(newValue)
        monkeys[newMonkey].items.push(newValue);
        count++;
      }
      currMonkey.items=[]
      currMonkey.inspected+= count;
    }
  }
  for(let i = 0; i < 20; i++) oneRound();
  monkeys.sort((monkeyA, monkeyB)=>monkeyB.inspected - monkeyA.inspected);
  return monkeys[0].inspected * monkeys[1].inspected;
}


const data =getData('day11sample1.txt').split('\n');
console.log(partOne(data))
// console.log(partTwo(data))

