const getData = require('./getData');


//a few items now need to be rearranged.

// Each rucksack has two  large rucksacks


// All items meant to go into eactly one of the two compartments

// One item per rucksack

// priority:

// 1-26  a-z
// 97 - 122

// 27-52 A-Z
// 65-90
const partOne = (data) => {
  let sum = 0;
  for (let line of data) {

    let midPoint = line.length/2;
    let firstSack = line.slice(0,midPoint)
    let secondSack = line.slice(midPoint)
    firstSack = new Set(firstSack);
    secondSack = new Set(secondSack);
    // for (let char of line.(slice))
    for (let char of secondSack) {
      if(firstSack.has(char)) {
        if(char === char.toLowerCase()) sum += char.charCodeAt(0) - 96;
        else sum += char.charCodeAt(0) - 38;
      }
    }
  }

  return sum;


}

const partTwo = (data) => {
  let sum = 0;
  for (let i = 0; i < data.length; i+= 3) {
    let firstLine = data[0+i].split('')
    let secondLine = new Set(data[1+i])
    let thirdLine = new Set(data[2+i])
    firstLine = firstLine.filter(char => secondLine.has(char) && thirdLine.has(char));
    firstLine = new Set(firstLine);
    for (let char of firstLine) {
      if(char === char.toLowerCase()) sum += char.charCodeAt(0) - 96;
      else sum += char.charCodeAt(0) - 38;
    }
  }
  return sum;
}

getData('day3.txt', partOne)
getData('day3.txt', partTwo)

