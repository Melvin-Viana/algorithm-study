const similarPairs = (words) => {
  let output = 0;
  for (let i = 0; i < words.length-1; i++) {
    const map = new Set(words[i]);
    let count = 1;
    for (let j = i + 1; j < words.length; j++) {
      let match = true;
      for (let k = 0; k < words[j].length; k++) {
        if(!map.has(words[j][k])) {
          match = false;
          break;
        }
      }
      if(match) count++;
    }
    output += count;
  }
  return output;
};