
/**
 *
 *
Rock shapes
####

.#.
###
.#.

..#
..#
###

#
#
#
#

##
##
 */

// seven units wide
const visited = {};
for(let i = 0; i < 7; i++) visited[`${i},-1`] = true;
const jetFlows = require('./getData')('day17.txt');
class Rock {
  constructor(leftBoundary, rightBoundary, bottomBoundary, topBoundary, coords){
    this.leftBoundary = leftBoundary;
    this.rightBoundary = rightBoundary
    this.bottomBoundary = bottomBoundary;
    this.topBoundary = topBoundary;
    this.coords = coords;
    this.length = coords.length;
  }
  pushRock(jet) {
    //Move down if you can
    if(this.checkBottom()) {
      for(let i = 0; i < this.length; i++) {
        let [x, y] = this.coords[i];
        this.coords[i] = [x, y-1];
      }
      this.bottomBoundary--;
      this.topBoundary--;
    }
    if(jet === '>' && this.rightBoundary < 6 ) {
      if(this.checkRight()) {
        this.rightBoundary+=1;
        this.leftBoundary += 1;
        //Update Coords
        for (let i = 0; i < this.length; i++) {
          let [x,y] = this.coords[i]
          this.coords[i] = [x+1,y]
        }
      }
    }
    if(jet === '<' && this.leftBoundary > 1)  {
      if(this.checkLeft()){
        this.rightBoundary -=1;
        this.leftBoundary -= 1;
        //Update coords
        for (let i = 0; i < this.length; i++) {
          let [x,y] = this.coords[i]
          this.coords[i] = [x-1,y]
        }
      }
    }
    if(!this.checkBottom()) return;

  }
  checkRight(){
    const rightCoords = this.coords.filter(([x,y]) => x === this.rightBoundary);
    for (let [x,y] of rightCoords) {
      if(visited[`${x+1},${y}`]) return false;
    }
    return true;
  }
  checkLeft(){
    const leftCoords = this.coords.filter(([x,y]) => x === this.leftBoundary);
    for (let [x,y] of leftCoords) {
      if(visited[`${x-1},${y}`]) return false;
    }
    return true;
  }
  checkBottom() {
    const bottomCoords = this.coords.filter(([x,y]) => y === this.bottomBoundary);
    for (let [x,y] of bottomCoords) {
      if(visited[`${x},${y-1}`]) return false;
    }
    return true;
  }

}
const addRockToGrid = (rockNode) => {
  let maxHeight = -1;
  for (let [x,y] of rockNode.coords) {
    maxHeight = Math.max(maxHeight, y);
    visited[`${x},${y}`] = true;
  }
  return maxHeight;
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

let highestRock = 0;
const numOfRocks = 5
let rockIndex = 0
// let currRock = createRock(rockIndex, highestRock + 3);
// currRock.pushRock('>')
// currRock.pushRock('>')
// currRock.pushRock('>')
// highestRock = Math.max(addRockToGrid(currRock), highestRock);
// console.log(highestRock)
// currRock = createRock(rockIndex+1, highestRock + 3);
// currRock.pushRock('<')
// currRock.pushRock('<')
// currRock.pushRock('>')
// highestRock = Math.max(addRockToGrid(currRock), highestRock);
// console.log(highestRock)
// currRock = createRock(rockIndex+2, highestRock + 3);
// currRock.pushRock('<')
// currRock.pushRock('>')
// currRock.pushRock('>')
// console.log(currRock.checkRight(), currRock.checkLeft(), currRock.checkBottom());
// // currRock.pushRock('<')
// highestRock = Math.max(addRockToGrid(currRock), highestRock);
// console.log(highestRock)
for (let i = 0; i < jetFlows.length;) {
  const currRock = createRock(rockIndex, highestRock + 3);
    for(let j = highestRock + 3; true; j--)  {
    let jet = jetFlows[i];
    if(!currRock.checkBottom() || (jet === '<' !currRock.checkLeft()) || (jet === '>' && !currRock.checkRight())) {
      rockIndex = currRock+1 > numOfRocks  ? 0 : rockIndex+1;
      highestRock = Math.max(addRockToGrid(currRock), highestRock);
      break;
    }
    currRock.pushRock(jet)
    i++;
  }

// }
console.log(visited, highestRock)