const visited = {};
for(let i = 0; i < 7; i++) visited[`${i},-1`] = true;
const jetFlows = require('./getData')('day17.txt');
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

let jetFlowIndex = 0;
let highestRock = 0;
const numOfRocks = 5;
const numOfFlows = jetFlows.length;
const addRockToGrid = (rockNode) => {
  for (let [x,y] of rockNode.coords) {
    highestRock = Math.max(highestRock, y);
    visited[`${x},${y}`] = true;
  }
}
for (let i = 0; i < 2022; i++) {
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
    addRockToGrid(currRock);
}
console.log({partOne: highestRock})