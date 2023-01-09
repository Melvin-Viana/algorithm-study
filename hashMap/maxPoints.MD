# Hash Map Solution
Loop through each element.
  - Loop through all the other elements.
    - Create a map
    - Calculate angle
    - Count the number of points on that angle
  - Update max points in one line

## My first solution:
```javascript
const maxPoints = (points) => {
  const xPoints = {};
  const yPoints = {};
  let ans = 1;
  for (let [x, y] of points) {
    xPoints[x] = xPoints[x] + 1 || 1
    yPoints[y] = yPoints[y] + 1 || 1
  }
  ans = Math.max(...Object.values(xPoints), ...Object.values(yPoints));
  const diags = {};
  const getGcd = (x, y) => {
    if(Math.abs(x) === Math.abs(y)) return Math.abs(x);
    if(x%y === 0) return y;
    return getGcd(y, x%y);
  }
  const visited = new Set();
  for (let i = 0; i < points.length; i++) {
    let [x,y] = points[i];
    diags[`${x},${y}`] = {};
    const curr = diags[`${x},${y}`];
    for (let j = 0; j < points.length; j++) {
      if(i === j) continue;
      let [nextX, nextY] = points[j];
      if(nextX === x) continue
      if(nextY === y) continue
      let xDiff = x - nextX;
      let yDiff = y - nextY;
      const gcd = getGcd(xDiff, yDiff);
      xDiff /= gcd
      yDiff /= gcd
      if(Math.abs(yDiff) !== yDiff && Math.abs(xDiff) === xDiff) [xDiff,yDiff] = [xDiff * -1, yDiff*-1];
      curr[`${xDiff},${yDiff}`] = curr[`${xDiff},${yDiff}`] + 1|| 2;
      visited.add(`${xDiff}/${yDiff},${nextX},${nextY}`)
    }
    ans = Math.max(...Object.values(curr), ans);
  }
  return ans;
}
```

## Takeaways
- You can use JavaScript map data structure if need an key-value pair objects, don't need to create a JS object.
- When creating lines with angles, 0 is an angle and 180 is an angle
- GCD not needed
- Calculating the Greatest Common Denominator use the Euclidian formula: https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
```javascript
const gcd = (numerator,denominator) => {
  if(Math.abs(numerator) === Math.abs(denominator)) return Math.abs(numerator);
  if(denominator % numerator) return gcd(numerator, denumerator % numerator);
  return numerator;
}
```