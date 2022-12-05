const getData = require('./getData');
//TODO: Refactor?
const partOne = (input) => {
  let ans = '';
  let stacks = []

  const moveStack = (line, stacks) => {
    let [boxes, column, newColumn] = line.split('x').filter(x=>!!x).map(Number);

    for (let i = 0; i < boxes && stacks[column-1].length; i++) stacks[newColumn-1].push(stacks[column-1].pop());
    return stacks;
  }
  let filledStacks = false;
  for (let line of input) {
    let index = 0;
    if(line === '') {
      filledStacks = true;
      continue;
    };
    if(!filledStacks) {
      let index = 0;
      for (let i = 0; i < line.length; i+=4) {
        let currCrate = line.slice(i+1, i+2).trim();
        if(stacks[index] === undefined) stacks[index] = []

        if(currCrate === '1') break;
        if(currCrate !== '')  {
          stacks[index].unshift(currCrate);
        }
        index++;
      }
    }
     else {
      stacks = moveStack(line.replace(/[^\d]/g, "x"), stacks)
    }
  }
  for(let i = 0; i < stacks.length; i++) {
    ans+= stacks[i].pop()
  }
  return ans;
}

const partTwo = (input) => {
  let ans = '';
  let stacks = []

  const moveStack = (line, stacks) => {
    let [boxes, column, newColumn] = line.split('x').filter(x=>!!x).map(Number);
    let length = stacks[column-1].length;
    const [start, end] = [stacks[column-1].slice(0, -boxes),stacks[column-1].slice(-boxes)];

    stacks[newColumn-1] = [...stacks[newColumn-1], ...end]
    stacks[column-1] = start;
    return stacks;
  }
  let filledStacks = false;
  for (let line of input) {
    let index = 0;
    if(line === '') {
      filledStacks = true;
      continue;
    };
    if(!filledStacks) {
      let index = 0;
      for (let i = 0; i < line.length; i+=4) {
        let currCrate = line.slice(i+1, i+2).trim();
        if(stacks[index] === undefined) stacks[index] = []

        if(currCrate === '1') break;
        if(currCrate !== '')  {
          stacks[index].unshift(currCrate);
        }
        index++;
      }
    }
     else {
      stacks = moveStack(line.replace(/[^\d]/g, "x"), stacks)
    }
  }
  for(let i = 0; i < stacks.length; i++) {
    ans+= stacks[i].pop()
  }
  return ans;
}


getData('day5.txt', partOne)
getData('day5.txt', partTwo)