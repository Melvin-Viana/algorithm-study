const parsedData = require('./parse');

const partOne = (directions) => {
  let x = 0;
  let y = 0;
  let houses = 1;

  const positions = new Set();
  positions.add('0,0')

  for (let dir of directions) {
    if(dir === '<') x--;
    else if(dir === '>') x++;
    else if(dir === '^') y++;
    else y--;

    if(positions.has(`${x},${y}`)) continue;
    else positions.add(`${x},${y}`) && houses++;
  }
  return houses;
};


console.assert(partOne('>') === 2)
console.assert(partOne('^>v<') === 4)
console.assert(partOne('^v^v^v^v^v') === 2)
console.log(partOne(parsedData))