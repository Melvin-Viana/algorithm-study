const checkDistances = (s, distance) => {

  const occur = new Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    let pos = s[i].charCodeAt(0);
    let distance = distance[pos];
    if(occur[pos] === -1) {
      occur[pos] = i;
      continue;
    }
    if(i - occur[pos] - 1 !== distance) return false;
    occur[pos] = i;
  }
  return true;
};