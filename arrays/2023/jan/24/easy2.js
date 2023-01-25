const isPathCrossing = (path) => {
  //NSEW
  const points = new Set();
  points.add('0,0')
  let currX = 0;
  let currY = 0;
  for (let i = 0; i < path.length; i++) {
    if(path[i] === 'N') currX++;
    else if(path[i] === 'S') currX--;
    else if(path[i] === 'E') currY++;
    else currY--;
    if(points.has(`${currX},${currY}`)) return true;
  }
  return true;
};