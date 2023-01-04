const getData = require('./getData');

const partOne = (input) => {
  let ans = 0;
  const signalStrengths = [];

  let index = 1;
  let sum = 1;
  const cycles = {};
  let cycleNumber = 0;
  const cycleSums = {0:1};
  const checkFor = [20, 60, 100, 140, 180, 220];

  input.forEach(line => {
    let number = line.split(' ')[1]
    if (line !== 'noop') {
      cycles[cycleNumber+2] = Number(number);
      cycleNumber++;
    }
    cycleNumber++;
    if(cycleNumber in cycles){
      sum += cycles[cycleNumber];
      cycleSums[cycleNumber] = sum;
    }
  });

  checkFor.forEach(number => {
    let getNum;
    let num = number-1;
    while(!(num in cycleSums)) {
      num--;
    }
    ans+= cycleSums[num] * number;
  })
  console.log(cycleSums)
  return ans;
}


const partTwo = input => {
  const ans = [];
  for (let i = 0; i < 6; i++) {
    let currStr = ''
    for (let j =0; j < 40; j++) currStr += '.'
    ans.push(currStr.split(''))
  }
  let currCycle = 0;
  let sum = 1;
  const cycles = {'1':1};
  input.forEach(line => {

    let number = line.split(' ')[1];
    number = Number(number);
    currCycle++;
    cycles[currCycle] = sum;
    if(line !== 'noop') {
      sum += number;
      cycles[currCycle+1] = sum;
      currCycle++;
    }
  })

  let spriteIndex = 1;


  /**
   * 1. On current cycle draw a lit pixel on currentPixel if there is a '#' in it
   * 2. Move the sprite to an index using each cycle
   * 3.
   *
   */
  const drawPixel = (row, pixel, spriteIndex) => {
    if(pixel === spriteIndex || pixel === spriteIndex - 1 || pixel === spriteIndex + 1) {
      ans[row][pixel] = '#';
    }
  };
  for (let i = 0; i < 6; i++) {
    for (let j =1; j <= 40; j++) {

      const crtIndex = j + (i*40)
      const currentPixel = j - 1;
      //draw the lit pixel if sprite is there
      drawPixel(i, currentPixel, spriteIndex);
      const pixel = cycles[crtIndex]
      //update the position of sprite
      spriteIndex = pixel;
    }
  }
  return ans.map(val=>val.join(''))
}
getData('day10.txt', partOne);
getData('day10.txt', partTwo);