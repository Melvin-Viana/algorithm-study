const parsedData = require('./parse');

const partOne = (dimensions) => {
  let squareFeet = 0;
  // Each dimension is l w h
  for (let [l, w, h] of dimensions) {
    let sideOne = 2 * l * w
    let sideTwo = 2 * h * w
    let sideThree = 2 * l * h
    let smallestSide = Math.min(sideOne, sideTwo, sideThree);
    squareFeet += sideOne + sideTwo + sideThree + smallestSide/2;
  }
  return squareFeet;
};

console.assert(partOne([[2,3,4]]) === 58)
console.assert(partOne([[1,1,10]]) === 43)

console.log(partOne(parsedData))