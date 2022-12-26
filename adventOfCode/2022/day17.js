
const jetFlows = require('./getData')('day17.txt');
const highestRocks = []
const numOfRocks = 5;
const numOfFlows = jetFlows.length;
let visited = {};
const patterns = {};

class Rock {
  constructor(leftBoundary, rightBoundary, bottomBoundary, topBoundary, coords){
    this.leftBoundary = leftBoundary;
    this.rightBoundary = rightBoundary
    this.bottomBoundary = bottomBoundary;
    this.coords = coords;
    this.length = coords.length;
  }

  pushX(i) {
    i %= jetFlows.length;
    let jet = jetFlows[i];
    if(jet === '<' && this.checkLeft()) {
      this.pushLeft()
    } else if( jet === '>' && this.checkRight()){
      this.pushRight();
    }
  }
  pushLeft(i = 0) {
    for(let [x, y] of this.coords) this.coords[i++] = [x-1, y];
    this.leftBoundary--;
    this.rightBoundary--;
  }
  pushRight(i = 0) {
    for(let [x, y] of this.coords) this.coords[i++] = [x+1, y];
    this.leftBoundary++;
    this.rightBoundary++;
  }
  pushDown(i = 0) {
    for(let [x, y] of this.coords) this.coords[i++] = [x, y-1];
    this.bottomBoundary--;
  }
  pushUp(i = 0) {
    for(let [x, y] of this.coords) this.coords[i++] = [x, y+1];
    this.bottomBoundary++;
  }
  checkRight(){
    if(this.rightBoundary === 6) return;
    for (let [x,y] of this.coords) {
      if(x+1 === 7) return
      if(visited[`${x+1},${y}`] === true) return false;
    }
    return true;
  }
  checkLeft(){
    if(this.leftBoundary === 0) return false;
    for (let [x,y] of this.coords) {
      if(visited[`${x-1},${y}`] === true) return false;
    }
    return true;
  }
  checkBottom() {
    if(this.bottomBoundary === 0) return false;
    for (let [x,y] of this.coords) {
      if(visited[`${x},${y}`]) return false;
    }
    return true;
  }

}

const createRock = (rockIndex, height) => {
  //Different shapes of rock
  // Falls at
  return [
     new Rock(2, 5, height, height, [ [2,height], [3,height],[4,height], [5, height]]) ,
     new Rock(2, 4, height, height+2, [ [2, height+1,], [3, height], [3, height+1], [3, height+2], [4,height+1]]) ,
     new Rock(2, 4, height, height+2, [ [2, height], [3, height], [4, height], [4, height+1], [4, height+2]]),
     new Rock(2, 2, height, height+3, [ [2, height], [2, height+1], [2, height+2], [2, height+3]]),
     new Rock(2, 3, height, height+1, [ [2, height], [2, height+1], [3, height], [3, height+1]]),
  ][rockIndex]
}


const addRockToGrid = (highestRock, rockNode, pattern) => {
  let currPos = ''
  for (let [x,y] of rockNode.coords) {
    highestRock = Math.max(highestRock, y);
    visited[`${x},${y}`] = true;
    currPos+=y
  }
  pattern+=currPos;
  return [highestRock, pattern];
}
const partOne = rows => {
  let jetFlowIndex = 0;
  let highestRock = 0;
  let pattern = '';
  let count = 0;
  for (let i = 0; i < rows; i++) {
    let rockIndex = i % numOfRocks;


    const currRock = createRock(rockIndex, highestRock + 4);

      let falling = false
      while (true) {
        if(falling)
        {
          currRock.pushDown();
          if(!currRock.checkBottom()) {
            currRock.pushUp();
            break;
          }
        } else {
          currRock.pushX(jetFlowIndex++)
        }
        falling = !falling

      }
      [highestRock, pattern] = addRockToGrid(highestRock, currRock, rockIndex, pattern);
      count++;
      if(count === 5) {
        if(pattern in patterns) {
          highestRocks.push([highestRock,i]);
          // return
        }  
        patterns[pattern] = {i, highestRock}
        pattern = '';
        count = 0;
      }
      else {
          pattern += ','
        }
        
  }

  return highestRock;
}


//Ans one
console.log(partOne(2022))
visited = {};
partOne(5000)
const end = highestRocks.length;
let highestRockDiff = highestRocks[end-1][0] - highestRocks[end-2][0]
let cycleDiff = highestRocks[end-1][1] - highestRocks[end-2][1]; //Every this cycle there is 2659

const numOfCycles = Math.floor(1000000000000/cycleDiff);
const leftOff = 1000000000000 - (numOfCycles * 1725)
visited = {};
//Ans two
console.log(numOfCycles*2659 + (partOne(leftOff)))  
