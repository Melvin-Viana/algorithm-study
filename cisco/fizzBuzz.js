const fizzBuzz = (n) => {
  const output = []
  for (let i = 1; i <= n ; i++) {
    let curr = `${i}`;
    if(!(i%5) && !(i%3)) curr = 'FizzBuzz'
    else if(!(i%3)) curr = 'Fizz'
    else if(!(i%5)) curr = 'Buzz'
    output.push(curr)
  }
  return output;
}