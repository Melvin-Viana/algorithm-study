const getData = require('./getData');

const getGrid = (input) => {
  const grid = [];
  let index = 0;
  let start;
  input.forEach(line => {
    if(line[0] === 'S') start = [0, index];
    grid.push([...line]);
    index++;
  });
  return [grid, start];
}

const MAX = Number.MAX_SAFE_INTEGER;

const partOne = (lines) => {
  // const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  // const charElevation = {}
  // charElevation['E'] = 26;
  // for(let key in alphabets) charElevation[alphabets[key]] = Number(key);

  // let ans = MAX;

  // const [grid, start] = getGrid(input);
  // const colEnd = grid[0].length;
  // const rowEnd = grid.length;
  // let [y, x] = start;
  // console.log(y, x)
  // grid[y][x] = '.';
  // const queue = [{
  //   pos: start,
  //   dist: 0,
  //   elevation: 0
  // }];
  // const isValid = (y, x, currElevation) => {
  //   return y >= 0 && y < rowEnd && x >= 0 && x < colEnd && charElevation[grid[y][x]] <= currElevation + 1
  // }
  // const dirs = [
  //   [-1, 0],
  //   [1, 0],
  //   [0, 1],
  //   [0, -1]
  // ]

  // while (queue.length) {
  //   const { pos: [y, x], dist, elevation} = queue.shift();
  //   const currChar = grid[y][x];
  //   if(elevation === 26) {
  //     return dist;
  //   }for (let [yChange, xChange] of dirs) {
  //     const nextY = y + yChange;
  //     const nextX = x + xChange;

  //     if(isValid(nextY, nextX, elevation) && grid[nextY][nextX] !== '.') {
  //       console.log(grid[nextY][nextX])
  //       queue.push({
  //         pos : [nextY, nextX],
  //         dist: dist + 1,
  //         elevation: charElevation[grid[nextY][nextX]]
  //       });
  //       grid[nextY][nextX] = '.'
  //     }
  //   }

  // }
  // return ans;
  const terrain = [];
  for (let i = 0; i < lines.length; i++)
    for (let j = 0; j < lines[i].length; j++)
      terrain.push(lines[i][j].charCodeAt(0));

  const start = terrain.findIndex((i) => i === "S".charCodeAt(0));
  const end = terrain.findIndex((i) => i === "E".charCodeAt(0));
  terrain[start] = "a".charCodeAt(0);
  terrain[end] = "z".charCodeAt(0);
  let count = 0;
  const bfs = (start) => {
    let queue = [[start, 0]];
    const cache = new Set([start]);
    while (queue.length) {
      count++;
      const [pos, steps] = queue.shift();
      if (pos === end) return steps;
      const res = [
        lines[0].length + pos, //Down
        -lines[0].length + pos, // Up
        1 + pos, //Right
        -1 + pos //Left
      ].filter((r) => terrain[r] <= terrain[pos] + 1 && !cache.has(r)); //Filters elevation values of at most 1 more than current char
      res.forEach(r=>cache.add(r)); // Add each char to visited
      queue.push(...res.map((c) => [c, steps + 1])); // adds left right up and down to queue
    }

    return Infinity;
  };

  return bfs(start)

}
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const elevations = {}
const myOwn = (lines) => {
  let start, end
  const grid = [];
  for (let i = 0; i < lines.length; i++) {
    grid.push([...lines[i]]);
    const hasStart= lines[i].indexOf('S');
    const hasEnd= lines[i].indexOf('E');
    if(hasStart !== -1) start = [i, hasStart];
    if(hasEnd !== -1) end = [i, hasEnd];
  }
  grid[end[0]][end[1]] = 'z';
  grid[start[0]][start[1]] = 'a';

  const m = lines.length;
  const n = lines[0].length;
  for(let i in alphabets) elevations[alphabets[i]] = Number(i);
  const bfs = (start) => {
    let queue = [[start, 0]];
    const visited = new Set()
    visited.add(`${start[1]}-${start[0]}`)
    while(queue.length) {
      const [pos, steps] = queue.shift();
      const [x,y] = pos;

      if(x === end[0] && y === end[1]) return steps;
      const res = [
        [x+1, y],
        [x-1,y],
        [x, y+1],
        [x, y-1]
      ]
      for (let [newX, newY] of res) {
        if(!(newX >= 0  && newY >= 0 && newX < m && newY < n)) continue;
        if(!(elevations[grid[newX][newY]] <= elevations[grid[x][y]] + 1)) continue;
        if(visited.has(`${newX}-${newY}`)) continue;
        visited.add(`${newX}-${newY}`);
        queue.push([[newX, newY], steps + 1]);
      }
    }
    return Infinity;
  }
  ans = MAX;
  const dfs = (pos, visited = {}, count = 0) => {
    const [x, y] = pos;
    if(x === end[0] && y === end[1]) return count;
    if(visited[`${x}-${y}`]) return MAX;
    visited[`${x}-${y}`] = true
    const res = [
      [x+1, y],
      [x-1,y],
      [x, y+1],
      [x, y-1]
    ]
    for(let [newX, newY] of res) {
      if(!(newX >= 0  && newY >= 0 && newX < m && newY < n)) continue;
      if(!(elevations[grid[newX][newY]] <= elevations[grid[x][y]] + 1)) continue;
      if(visited[`${newX}-${newY}`]) continue;
      ans = Math.min(dfs([newX, newY], {...visited}, count+1 ), ans)
    }
    return ans;
  };
  // return dfs(start)
  const startPositions = [start];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(grid[i][j] === 'a') startPositions.push([i,j]);
    }
  }
  ans = MAX;
  for (let currStart of startPositions) {
    ans = Math.min(bfs(currStart), ans)
  }


  return {
   partOne: bfs(start),
   partTwo: ans
  }
  }

const data = getData('day12.txt');
console.log(myOwn(data.split('\n')))
