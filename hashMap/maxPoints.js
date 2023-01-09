const maxPoints = (points) =>{
  if(points.length <= 2) return points.length;
  let ans = 2;
  for (let i = 0; i < points.length; i++) {
    let [x,y] = points[i];
    const map = new Map();
    for (let [currIndex, [nextX, nextY]] of points.entries()) {
      let angle
      if(i === currIndex) continue;
      if(nextY === y) {
        angle = Number.MAX_SAFE_INTEGER;
      } else {
        let xDiff = x - nextX;
        let yDiff = y - nextY;
        angle = xDiff/yDiff;
      }
      map.set(angle, map.get(angle) + 1 || 2);
    }
    ans = Math.max(...map.values(), ans);
  }
  return ans;
}

console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]));