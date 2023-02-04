const checkInclusion = (s1, s2) => {
  const count = new Map();
  const found = new Set();
  for (let char of s1) {
    if(!count.has(char)) count.set(char, 0);
    count.set(char, count.get(char) + 1);
  }

  for (let i = 0; i < s1.length; i++) {
    if(count.has(s2[i])) count.set(s2[i], count.get(s2[i]) - 1);
    if(count.get(s2[i]) === 0) found.add(s2[i])
    else if(count.get(s2[i] < 0)) found.delete(s2[i])
  }
  if(found.size === count.size) return true;


  for (let i = 1; i < s2.length - s1.length + 1; i++){
    let prev = s2[i-1];
    if(count.has(prev)) {
      let prevCount = count.get(prev);
      count.set(prev, prevCount + 1)

      if(prevCount + 1  === 0) found.add(prev)
      else if(prevCount + 1  > 0) found.delete(prev)
    }
    if(found.size === count.size) return true;
    let next = s2[i+s1.length-1];
    if(count.has(next)) {
      let nextCount = count.get(next);
      count.set(next, nextCount-1);

      if(nextCount - 1 === 0) found.add(next);
      else if(nextCount - 1 < 0) found.delete(next);
    }
    if(found.size === count.size) return true;
  }
  return false;
}