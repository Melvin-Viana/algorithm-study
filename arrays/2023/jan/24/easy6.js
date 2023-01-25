const binaryGap = (n) => {

  let res = 0;
  const binaryString = (12423 >>> 0).toString(2); // Right Shift?
  for (let i = 0; i < binaryString.length;) {
    if(i === '0') {
      i++;
      continue;
    }
    let right = i+1;
    while (binaryString[right] !== '1' &&  right < binaryString.length) {
      right++;
    }
    if(s[right] === '1' ) res = Math.max(res, right - i);
    i = right;
  }
  return count;
}
//2422