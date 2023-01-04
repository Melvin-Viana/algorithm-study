const lines = require('./getData')('day14.txt').split('\n');

let minX = Number.MAX_SAFE_INTEGER
let maxX = Number.MIN_SAFE_INTEGER;
let maxY = Number.MIN_SAFE_INTEGER;
const rocks = new Set();

const createRocks = ([prevX, prevY], [nextX, nextY]) => {
  maxX = Math.max(maxX, nextX, prevX);
  maxY = Math.max(maxY, nextY, prevY);
  minX = Math.min(minX, prevX, nextX);
  let start, end;
  let sameY = true;

  if(prevX === nextX) [start, end, sameY] = [Math.min(prevY, nextY), Math.max(prevY, nextY), false];
  else [start, end] = [Math.min(prevX, nextX), Math.max(prevX, nextX)]

  for (let i = start; i <= end; i++) {
    const x = sameY ? i : nextX;
    const y = sameY ? nextY : i;
    let rock = `${x}-${y}`;
    rocks.add(rock)
  }
}

let prev = [];

for (let line of lines) {
  line = line.split(' -> ')
  for (let i = 0; i < line.length - 1; i++) prev = createRocks(line[i].split(','), line[i+1].split(','));

}

//A unit of sand always falls down one step if possible.
let currX = 500;
let currY = 0;
const reset = () => {
  currX = 500;
  currY = 0;
}

const getPossibleMoves =(coord)  => {
  const [x, y] = coord;
  return [
    // down
    [x, y + 1],
    // down-left
    [x - 1, y + 1],
    // down-right
    [x + 1, y + 1]
  ]
}
const partOne = (rocks) => {
  let ans = 0;
  while (currY < maxY &&  currX >= minX && currX <= maxX ) {
    //All the way down
    const moves = getPossibleMoves([currX, currY]).filter(([newX, newY]) => !rocks.has(`${newX}-${newY}`));
    if(moves.length === 0) {
      rocks.add(`${currX}-${currY}`);
      reset();
      ans++;
    } else {
      [currX, currY] = moves[0];
    }
  }
  return ans;
}

const partTwo = (rocks) =>  {
  ans = 0;
  maxY = maxY + 2;

  while (!rocks.has(`${currX}-${currY}`)) {
    const moves = getPossibleMoves([currX, currY]).filter(([newX, newY]) =>  !rocks.has(`${newX}-${newY}`) && newY < maxY );
    if(moves.length === 0) {
      rocks.add(`${currX}-${currY}`);
      reset();
      ans++;
    } else {
      [currX, currY] = moves[0];
    }
  }
  return ans;
}
console.log(partOne(new Set(rocks)))
console.log(partTwo(rocks))