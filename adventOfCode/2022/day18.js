// 2
// 1  x x
// 0
//  0 1 2 3 4


// 3 different planes x, y, z

// On each cube you need to find if it is connected to a cube
  // 2D matrix connections would be 4 directions up, down, left, right
  // 3̶D̶ m̶a̶t̶r̶i̶x̶ c̶o̶n̶n̶e̶c̶t̶i̶o̶n̶s̶ 4̶ m̶o̶r̶e̶ d̶i̶r̶e̶c̶t̶i̶o̶n̶s̶?̶ 6 directions

  /**
   *
    1,1,1 => [1,2,1] , [1,0,1], [0,1,1], [2,1,1] ,[1,1,2], [1,1,0] up, down, left, right, z-left, z-right
   *
   */
    console.time("ExecutionTime");

const grid = new Set(); //xyz cubes: number of sides uncovered

const cubes = require('./getData')('day18.txt').split('\n');
const dirs = [[1,0,0],[-1,0,0],[0,1,0], [0,-1,0],[0,0,1],[0,0,-1]]
let ans = 0;

//Part One:
  // Each side has 6 surface area
  // When one side connects to another both surface areas are subtracted
cubes
.forEach((cube) => {
  let [x,y,z] = cube.split(',').map(Number);
  grid.add(cube);
  ans += 6;
  dirs.forEach(([xChange, yChange, zChange]) => {
    let [newX, newY, newZ] = [x+xChange, y+yChange, z+zChange];
    let nextCube =`${newX},${newY},${newZ}`;
    if(grid.has(nextCube)) ans-=2;
  })
})

let MIN = Infinity;
let MAX = -Infinity;

for (let cube of grid) {
  let [x, y, z] = cube.split(",").map((n) => parseInt(n));
  MIN = Math.min(MIN, x, y, z);
  MAX = Math.max(MAX, x, y, z);
}
// Part Two:
  // Subtract all of the sides that are not touched by the steam/water
  // Water starts at coordinates 0,0,0


const queue = [[0,0,0]]
const visited = new Set();
ans = 0;
while (queue.length) {
  const [x,y,z] = queue.shift();
  const cube = `${x},${y},${z}`;
  if(visited.has(cube)) continue;
  if(grid.has(cube)) continue;
  if (x < MIN - 1 || y < MIN - 1 || z < MIN - 1) continue;
  if (x > MAX + 1 || y > MAX + 1 || z > MAX + 1) continue;
  visited.add(cube)
  dirs.forEach(([xChange, yChange, zChange])=>{
    let newX = x+xChange;
    let newY = y+yChange;
    let newZ = z+zChange;
    if(grid.has(`${newX},${newY},${newZ}`)) ans++;
    queue.push([newX, newY, newZ]);
  })
};

console.log(ans)