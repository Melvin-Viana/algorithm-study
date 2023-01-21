const evalRPN = (tokens) => {
  const stack = [];

  for (let op of tokens) {
    if (!isNaN(op)) {
      stack.push(Number(op));
    } else {
      let second = stack.pop();
      let first = stack.pop();
      if (op === "+") stack.push(first + second);
      if (op === "-") stack.push(first - second);
      if (op === "/") stack.push(Math.trunc(first / second));
      if (op === "*") stack.push(first * second);
    }
  }
  return stack[0];
};
