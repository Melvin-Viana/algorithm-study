//TC: O(n) - Linear One pass
// SC : O(n) - O(26) - Worst case 26 unique

const validAnagram = (s, t) => {
  if(s.length !== t.length) return false;
  const map = new Map();
  for (let char of s) {
    if(!map.has(char)) map.set(char, 0);
    let curr = map.get(char);
    map.set(char, curr+1);
  }

  for (let char of t) {
    if(!map.has(char)) return false;
    let curr = map.get(char) - 1;
    if(curr === 0) map.delete(char);
    else map.set(char, curr);
  }
  return map.size === 0;
}

console.assert(validAnagram('bac','abc'), 'true')
console.assert(!validAnagram('a','abc'), 'false')
console.assert(!validAnagram('abc','a'), 'false')