const getData = require('./getData');

//Unique ID number, each elf is assigned a rage of section ids


// Many overlap

//2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8


// Each row is a pair of elves
const partOne = (input) => {
  // Create lists
  let ans = 0;
  for (let line of input) {
    line = line.split(',')
    let firstElf = line[0].split('-').map(a=>Number(a))
    let secondElf = line[1].split('-').map(a=>Number(a))
    // Check first elf is within second elf range
    if(firstElf[0] <= secondElf[0] && firstElf[1] >= secondElf[1] ) ans++;
    else if(secondElf[0] <= firstElf[0] && secondElf[1] >= firstElf[1] ) ans++;

  }

  return ans;

}
const partTwo = (input) => {
  let ans = 0;
  for (let line of input) {
    line = line.split(',')
    let firstElf = line[0].split('-').map(a=>Number(a))
    let secondElf = line[1].split('-').map(a=>Number(a))
    // Check first elf is within second elf range
    for (let i = firstElf[0]; i <= firstElf[1] ; i++) {
      if(i === secondElf[0] || i === secondElf[1] || i > secondElf[0] && i < secondElf[1] ) {
        ans++;
        break;
      }
    }


  }
  return ans;
}


getData('day4.txt', partOne)
getData('day4.txt', partTwo)