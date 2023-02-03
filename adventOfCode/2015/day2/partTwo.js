const parsedData = require('./parse');

const partTwo = (dimensions) => {
  let feet = 0;
  for (let [l,w,h] of dimensions) {
    let perimeter = Math.min((l+w) * 2, (h+w) * 2, (l+h) * 2)
    let volume = l * w * h;
    feet += volume + (perimeter );
  }
  return feet;

};
console.assert(partTwo([[2,3,4]]) === 34)
console.assert(partTwo([[1,1,10]]) === 14)
console.log(partTwo(parsedData));