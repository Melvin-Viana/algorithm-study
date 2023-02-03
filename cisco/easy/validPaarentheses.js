const isValid = s => {
  const stack = []
  const brackets = {
    '[' : ']',
    '{' : '}',
    '(' : ')'
  }
  for (let bracket of s) {
    if(brackets[bracket])stack.push(bracket);
    else if(brackets[stack.pop()] !== bracket) return false;
  }

  return !stack.length
}