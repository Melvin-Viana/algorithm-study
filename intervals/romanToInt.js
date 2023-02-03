const romanToInt = s => {
  const codes = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  let output = 0;
  for (let i = 0; i < s.length; i++) {
    if(i + 1 < s.length && codes[s[i]] < codes[s[i+1]]) {
      output -= codes[s[i]];
    } else {
      output += codes[s[i]]
    }
  }
  return output;
}