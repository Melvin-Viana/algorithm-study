const getData = require('./getData');


const partOne = (input) => {

  input.forEach(line => {
    for (let i = 0; i < line.length - 4; i++) {
      const set = new Set(line.slice(i, i+4))
      if(set.size === 4) return i+4;
    }
  });
}
const partTwo = (input) => {
  input.forEach(line => {
    for (let i = 0; i < line.length - 14; i++) {
      const set = new Set(line.slice(i, i+14))
      if(set.size === 14) return i+14;
    }
  });
}

getData('day6.txt', partOne);
getData('day6.txt', partTwo);