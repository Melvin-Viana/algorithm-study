// Constraints: Contains brackets only, has at least one character
module.exports = (s) => {
  const stack = [];
  const openBrackets = {"}":"{", ")":'(', "]":"["};
  for (let c of s) {

    // If opening bracket, add to stack
    if(c === '[' || c === '{' || c === '(') {
      stack.push(c);
    } else if(stack.pop() !== openBrackets[c]) {
    // If closing bracket check if valid closing bracket
       return false;
    }
  }
  //Open bracket must be closed in correct order.
  return stack.length === 0
}

//TC: O(n)
//SC: O(n)