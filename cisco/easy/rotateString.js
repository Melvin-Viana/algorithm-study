const rotateString = (s, goal) => {
  if(s.length !== goal.length) return false;
  for (let i = 0; i < s.length; i++) {
    let start = s.slice(0, i+1);
    let end = s.slice(i+1);
    if(goal.indexOf(start) && goal.indexOf(end)) return true;
  }
  return false;
}