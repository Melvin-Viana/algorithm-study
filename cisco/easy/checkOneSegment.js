const checkOneSegment = (s) => {
  //Check for one segment of ones
  let oneSegment = false;
  for (let i = 0; i < s.length;) {
    let curr = s[i];
    if(curr === '1' && !oneSegment) oneSegment = true;
    else if(curr === '1' && oneSegment) return false;
    i++
    while(i < s.length && s[i] === curr) i++;
  }
  return oneSegment;
}