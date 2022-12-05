const getData = require('./getData');


//Crates

//Giant cargo crane

const partOne = (input) => {
  let ans = '';
  let stacks = []

  const moveStack = (line, stacks) => {
    line[1] = line[1].trim()
    let boxes = Number(line[0].replace(/[^\d]/g, ""));
    let column = line[1][0] - 1;
    let newColumn = line[1][line[1].length-1] -1;
    let i = 0


    for (let i = 0; i < boxes && stacks[column].length; i++) stacks[newColumn].push(stacks[column].pop());
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
      stacks = moveStack(line.split(' from'), stacks)
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
    line[1] = line[1].trim()
    let boxes = Number(line[0].replace(/[^\d]/g, ""));
    let column = line[1][0] - 1;
    let newColumn = line[1][line[1].length-1] -1;
    let length = stacks[column].length;
    const [start, end] = [ stacks[column].slice(0, length-boxes),stacks[column].slice(length - boxes, length)];

    // //Take the last n boxes from column and place in new column
    stacks[newColumn] = [...stacks[newColumn], ...end]
    stacks[column] = start;
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
      stacks = moveStack(line.split(' from'), stacks)
    }
  }
  for(let i = 0; i < stacks.length; i++) {
    ans+= stacks[i].pop()
  }
  return ans;
}


getData('day5.txt', partOne)
getData('day5.txt', partTwo)