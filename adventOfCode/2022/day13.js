const getData = require('./getData')
const lines = getData('./day13.txt').split('\n')

// distress signal

// packets are out of order

// Reorder them please

// how many pairs of packets are in the right order


// Packet data consists of lists and integers

  // Compare the packets seperated by comma
  // If both elements are integers, the left element must be bigger
  // If both are lists compare values within each list
  // If one element is list
    // compare all values of the list to that one element

const dfs = (line, xIndex, length) => {
  const stack = [];
  while (line[xIndex] !== ']' && xIndex < length) {
    let curr = line[xIndex];
    if(curr === '[') {
      [curr, xIndex] = dfs(line, xIndex+1, length);
      stack.push(curr);
    } else if(curr !== ',') stack.push(Number(curr));
    xIndex++;
  }
  return [stack, xIndex + 1];

}

let partOneAns =0;
const comparePackets = (left, right) => {
    if(typeof left === 'number') {
      if(typeof right === 'number') return left - right;
      else return comparePackets([left], right)
    } else {
      if(typeof right === 'number') return comparePackets(left, [right]);
    }
    if(left.length > right.length) {
      for (let i = 0; i < right.length; i++) {
        let v = comparePackets(left[i], right[i]);
        if(v) return v;
      }
    } else {
      for(let i = 0; i < left.length; i++) {
        let v = comparePackets(left[i], right[i]);
        if(v) return v;
      }
    }

    return left.length - right.length;
}
let t = 1;
const packets = [[[2]]]
packets.push([[6]])
for (let i = 0; i < lines.length; i+=3) {
  const left = JSON.parse(lines[0+i])
  const right = JSON.parse(lines[1+i])

  if(comparePackets(left, right) < 0) {
    partOneAns += t
  }
  packets.push(left)
  packets.push(right)
  t++;
}



packets.sort((a,b) => {
  let v = comparePackets(a,b)
  if(v < 0) return -1;
  return 1;
})
let i = 0;
const partTwo = [];
for (let packet of packets) {
  if(packet.length === 1 && packet[0] && (packet[0][0] === 2 || packet[0][0] === 6)) partTwo.push(i+1)
  i++;
}
console.log(
  {
    partOne: t,
    'partTwo': partTwo[0] * partTwo[1]
  }
)
//141
//224