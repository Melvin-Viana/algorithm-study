const parsedData = require('./parse')

const partOne = (s) => {
  //Stack
  const stack = [];
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if(s[i] === '(') ans++;
    else ans--;
  }
  return ans
}

console.assert(partOne('(())') === 0)
console.assert(partOne('()()') === 0)
console.assert(partOne('(((') === 3)
console.assert(partOne('(()(()(') === 3)
console.assert(partOne('))(((((') === 3)
console.assert(partOne('))(((((') === 3)
console.assert(partOne('())') === -1)
console.assert(partOne('))(') === -1)
console.assert(partOne(')())())') === -3)

console.log(partOne(parsedData))