const fizzBuzz = n => {
  const res = []
  for (let i = 1; i < n+1; i++) {
    let curr = `${i}`;
    if(!(i%5) && !(i%3)) curr = 'FizzBuzz'
    else if(!(i%3)) curr = 'Fizz'
    else if(!(i%5)) curr = 'Buzz'
    res[i-1]=curr;
  }
  return res;
}