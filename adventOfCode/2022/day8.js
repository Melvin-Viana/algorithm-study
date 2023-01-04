const getData = require('./getData');

const partOne = (input) => {
  let ans = 0;

  const matrix = [];
  for(let line of input) {
    matrix.push(line.split('').map(Number))
  }
  const n = matrix.length; //y-axis
  const m = matrix[0].length; //x-axis

  //-2 will mean that it is visited


  const dfs = (matrixChange, originalValue, y, x) => {
    if(y === n - 1 || y === 0) return matrix[y][x] < originalValue;
    if(x === m - 1 || x === 0) return matrix[y][x] < originalValue;
    if(matrix[y][x] >= originalValue) return false;
    const ops = {
      'up': [-1,0],
      'down': [1,0],
      'left': [0,-1],
      'right': [0,1],
    }
    const [yChange, xChange] = ops[matrixChange];
    [y, x] = [y+yChange, x+xChange];
    return dfs(matrixChange, originalValue, y, x);
  }


  for (let i = 1; i < n-1; i++) {
    for(let j = 1; j < m-1; j++) {
      const val = matrix[i][j]
      if(dfs('up', val, i-1, j) || dfs('down', val, i+1, j) || dfs('left', val, i, j-1) || dfs('right', val, i, j+1)) {
        ans++;
      }

    }
  }
  const outerTrees = m*2+(n-2)*2;
  return ans+outerTrees;

}
const partTwo = (input) => {
  let ans = 0;

  const matrix = [];
  for(let line of input) {
    matrix.push(line.split('').map(Number))
  }
  const n = matrix.length; //y-axis
  const m = matrix[0].length; //x-axis

  //-2 will mean that it is visited

  const ops = {
    'up': [-1,0],
    'down': [1,0],
    'left': [0,-1],
    'right': [0,1],
  }

  const checkTrees = (matrixChange, treeHeight, vals, y, x) => {
    //Up
    if(y === n - 1 || y === 0) return vals;
    if(x === m - 1 || x === 0) return vals;
    if(matrix[y][x] >= treeHeight) return vals;
    const [yChange, xChange] = ops[matrixChange];
    [y, x] = [y+yChange, x+xChange];

    return checkTrees(matrixChange, treeHeight, vals+1, y, x);
  }
  const dirs = ['up','down', 'left','right']
  for (let i = 1; i < n-1; i++) {
    for(let j = 1; j < m-1; j++) {

      const treeHeight = matrix[i][j]
      const vals = dirs.map(dir=>checkTrees(dir,treeHeight, 1, i+ops[dir][0], j+ops[dir][1]));
      const prod = vals.reduce((a,b) =>a*b,1);
      ans = Math.max(ans,prod)
    }
  }
  return ans;
}


getData('day8.txt',partOne)
getData('day8.txt',partTwo);

