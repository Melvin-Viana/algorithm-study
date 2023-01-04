const getData = require('./getData');

const partOne = (input) => {
  let ans =0;
  const visited = {};

  let yHead = 0,
    yTail = 0

  let xHead = 0,
    xTail = 0
  const dirs = {
    'U': 1,
    'D': -1,
    'L': -1,
    'R': 1
  }

  const moveX = (xDifference, yDifference) => {
    if(xDifference === -2 || (xDifference === -1 && yDifference === 2)) return -1;
    else if(xDifference === 2 || (xDifference === 1 && yDifference === 2)) return 1;
    return 0;
  }
  const moveY = (xDifference, yDifference) => {
    if(yDifference === -2 || (yDifference === -1 && xDifference === 2)) return -1;
    else if(yDifference === 2 || (yDifference === 1 && xDifference === 2)) return 1;
    return 0;
  }
  const moveTail = (dir) => {
    const yDifference = yHead-yTail;
    const xDifference = xHead-xTail;
    if(Math.abs(yDifference) === 2) {
      //Move left/right
      xTail += moveX(xDifference, Math.abs(yDifference));
      // Move up/down
      yTail += moveY(xDifference, yDifference)
    } else if(Math.abs(xDifference) === 2) {
      //Move left/right
      xTail += moveX(xDifference, yDifference);
      // Move up/down
      yTail += moveY(Math.abs(xDifference), yDifference)
    }

  }


  const moveHead = (dir) => {
    count++;
    if(dir === 'U' || dir === 'D') {
      yHead += dirs[dir];
    }  else {
      xHead += dirs[dir];
    }
    moveTail(dir);
    if(`${xTail}/${yTail}` in visited) return;
    visited[`${xTail}/${yTail}`] = true;
    ans++;
  }

  let count = 0;
  for(let line of input) {
    line = line.split(' ')
    let dir = line[0]
    let number = Number(line[1]);
    for(let i = 0; i < number; i++) moveHead(dir);

  }
  console.log(visited)
  return ans;
}
const partTwo = (input) => {
  let ans =0;
  const visited = {'0/0':true};

  const positions = [];
  let prevMov = ''
  for (let i = 0; i < 10; i++) {
    positions.push([0,0]);
  }
  const dirs = {
    'U': 1,
    'D': -1,
    'L': -1,
    'R': 1,
  }


  const moveX = (xDifference, yDifference) => {
    if(xDifference === -2 || (xDifference === -1 && yDifference === 2)) return -1;
    else if(xDifference === 2 || (xDifference === 1 && yDifference === 2)) return 1;
    return 0;
  }
  const moveY = (xDifference, yDifference) => {
    if(yDifference === -2 || (yDifference === -1 && xDifference === 2)) return -1;
    else if(yDifference === 2 || (yDifference === 1 && xDifference === 2 )) return 1;
    return 0;
  }
  const moveTail = (index) => {
    if(index === 10) return;
    let [xHead, yHead] = positions[index-1];
    let [xTail, yTail] = positions[index];
    const yDifference = yHead-yTail;
    const xDifference = xHead-xTail;
    if(Math.abs(xDifference) !== 2 && Math.abs(yDifference) !== 2) return;

    if(Math.abs(yDifference) === 2) {
      //Move left/right
      xTail += moveX(xDifference, Math.abs(yDifference));
      // Move up/down
      yTail += moveY(xDifference, yDifference)
    } else if(Math.abs(xDifference) === 2) {
      //Move left/right
      xTail += moveX(xDifference, yDifference);
      // Move up/down
      yTail += moveY(Math.abs(xDifference), yDifference)
    }

    positions[index] = [xTail, yTail];
    if(index === 9) visited[`${xTail}/${yTail}`] = true;
    moveTail(index+1);
  }



  const moveHead = (dir, head) => {
    let [xHead, yHead] = head;
    if(dir === 'U' || dir === 'D') {
      yHead += dirs[dir];
    }  else {
      xHead += dirs[dir];
    }
    positions[0] = [xHead, yHead];
    moveTail(1);
  }

  for(let line of input) {
    line = line.split(' ')
    let dir = line[0]
    let number = Number(line[1]);
    for(let i = 0; i < number; i++) {
      moveHead(dir, positions[0]);
    }
  }

  return Object.keys(visited).length;
}

getData('day9.txt', partOne)
getData('day9.txt', partTwo)