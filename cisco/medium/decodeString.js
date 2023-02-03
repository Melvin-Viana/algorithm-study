const decodeString = (s) => {

  const stack = [];
  let currNum = 0;
  let currStr = '';

  for (let char of s) {
    if(char === '[') {
      //Add to the stack and reset stackData
      stack.push([currStr, currNum]);
      currStr = '';
      currNum = 0;
    } else if(char === ']') {
      let [prevStr, num] = stack.pop()
      let nextStr = ''
      for (let i =0; i < num; i++) nextStr += currStr;
      currStr = prevStr + nextStr
    } else if(!isNaN(char)) {
      currNum = (currNum * 10) + Number(char);
    } else {
      currStr += char;
    }
  }
  return currStr;
};