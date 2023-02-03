const parsedData = require('./parse');


const partTwo = (directions) => {
  const positions = new Set();
  let santaX = 0;
  let santaY = 0;
  let roboX = 0;
  let roboY = 0;
  let houses = 1;
  positions.add('0,0');

  let santaTurn = true;

  const moveSanta = (dir, [x,y]) => {
    if(dir === '<') x--;
    else if(dir === '>') x++;
    else if(dir === '^') y++;
    else y--;
    if(!positions.has(`${x},${y}`)) positions.add(`${x},${y}`) && houses++;
    return [x,y];
  }

  for (let dir of directions) {
    if(santaTurn) [santaX, santaY] = moveSanta(dir, [santaX, santaY]);
    else [roboX, roboY] = moveSanta(dir, [roboX, roboY]);
    santaTurn = !santaTurn
  }
  return houses;
};

console.assert(partTwo('^v') === 3)
console.assert(partTwo('^>v<') === 3)
console.assert(partTwo('^v^v^v^v^v') === 11)
console.log(partTwo(parsedData));