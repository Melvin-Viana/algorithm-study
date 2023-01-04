const getData = require('./getData');
// https://leetcode.com/problems/longest-absolute-file-path/

// [1, 5, 3, 7]

const directory = {
  '/':{
    parent:'/',
    size:0,
    depth:0
  }
};//What is the sum of the total sizes of those directories?
const partOne = (input) => {

  let currPath = '/'


  const changeDir = (dir) => {
    if(dir === '/') {
      currPath = '/';
      return
    }else if(dir === '..') {
      currPath = directory[currPath].parent;
      return;
    }
    let newPath = currPath + '/' + dir;
    currPath = newPath;
  }

  const makeDir = (dir) => {
    directory[currPath +'/'+ dir] = {
      parent: currPath,
      size: 0,
      depth: directory[currPath].depth+1
    }
  }

  const addFileToDirectory = (currPath, size) => {
    const parent = directory[currPath].parent;
    directory[currPath].size = size + directory[currPath].size;
    if(currPath !== '/')  addFileToDirectory(parent, size)
  }



    input.forEach(line => {
      line = line.split(' ')
      let number = Number(line[0])
      if(!!number) {
      //  addToStack(currDir, number);
      addFileToDirectory(currPath, number);
      }
      if(line[1] === 'cd') {
        let dir = line[2];
        changeDir(dir, currPath);
      } else if(line[0] === 'dir') {
        makeDir(line[1]);
      }
    });

    // DFS for all values with 1000000
    const allFoldersDepth = Object.keys(directory).sort((a,b)=> directory[a].depth-directory[b].depth);
    const queue = [allFoldersDepth[0]];
    const length = allFoldersDepth.length;
    let ans = 0;



    const addToAns = (path) => {
      const parent = directory[path];
      if(path in visited) return;
      ans += directory[path].size;
      visited[path] = true;
    }
    const visited = {}
    const lessThan100000 = allFoldersDepth.filter(val=> directory[val].size <= 100000);

    for(let i = 0; i < lessThan100000.length; i++) {
      const path = lessThan100000[i];
      addToAns(path);
    }

    return ans;
};

//70000000

// //30000000
const partTwo = () => {
  const allFoldersDepth = Object.keys(directory).sort((a,b)=> directory[a].depth-directory[b].depth);
  let rootSize = directory['/'].size;
  let minSize = 70000000 - rootSize;
  minSize = 30000000 - minSize
  console.log(minSize);
  //Have at least 30000000
  const sizes = allFoldersDepth.map(dir=>directory[dir].size).sort((a,b)=>a-b).filter(val=>val >= 4376732);
  console.log(sizes);
  // return ans;
}

getData('day7.txt', partOne);
console.log(partTwo())
// console.log(directory)
