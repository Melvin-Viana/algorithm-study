const parsedData = require('./parse');

const partTwo = (s) => {
  let level = 0;

  for (let i = 0; i < s.length; i++) {
    if(s[i] === '(') level++;
    else level--;
    if(level ===-1) return i + 1;
  }

}
console.assert(partTwo(')') === 1)
console.assert(partTwo('()())') === 5)
console.log(partTwo(parsedData));