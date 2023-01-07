/**
 * 
 * @param {Array.[x1,x2]} points (x1 = start of point, x2 = end of point)
  @returns {Number} Lowest number of arrows to be shot to pop all of them
*/

// O
// I
// Constraints : at least 1 point;
// const findMinArrowShots = (points) => {
//   if(points.length === 1) return 1;
//  // Sort the array
//  const n  = points.length;
//   points.sort((a,b)=>{
//     if(a[0]<b[0]) return -1;
//     if(a[0] === b[0]) return a[1] - b[1];
//   });
//  // Go through each range and find the best spot to fire
//  console.log(points)
//  const inRange = (min, max, index) => {
//   let [start, end] = points[index];
//   console.log(start,end,min,max)
//   return start >= min && end >= min && start <= max;
//  } 
//  const paths = [];
//  const fireArrows = (index,arrows=0,path=[]) => {
//     if(index === n) {
//       paths.push(path)
//       return arrows;
//     }
//     let [min, max] = points[index];
//     let nextIdx = index;
//     path.push([index,arrows])
//     for (let i = index + 1; i < n; i++) {
//       if(inRange(min,max, i)) {
//         max = Math.min(max, points[index][1])
//         nextIdx++;
//       } else {
//         break;
//       }
//     }
//     return fireArrows(nextIdx+1, arrows+1, [...path]) ;
//   }
//   let ans = points.length;
//   for (let i = 0; i < n; i++) {
//     ans = Math.min(ans, fireArrows(i) + i);
//   }
//   console.log(paths)
//   return ans;
// }

const findMinArrowShots = (points) => {
  
  const n  = points.length;
  if(n === 0) return 1;
  points.sort((a,b)=>a[1]-b[1]);
  let ans = 1;
  console.log(points)
  let currEnd = points[0][1];
  for (let point of points) {
    if(currEnd < point[0]) {
      ans+= 1;
      currEnd = point[1]
    } else {
      currEnd = Math.min(currEnd, point[1])
    }
  }
  return ans;
}
// console.log(findMinArrowShots([[10,16],[2,8],[1,22],[7,12],[2,9]]))
// console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));
// console.log(findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]));


// console.log(findMinArrowShots([[10,16],[2,8],[1,22],[7,12],[2,9]]))
// console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));
// console.log(findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]));
console.log(findMinArrowShots([[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]));
