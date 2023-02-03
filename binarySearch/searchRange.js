const searchRange = (nums, target) => {
  let leftAns = -1;
  const bsLeft = (left, right) => {
    console.log(left,right)
    if(left > right)return -1;
    let mid = Math.floor((left+right)/2)
    if(nums[mid]  === target) {
      leftAns = mid;
    }
    if(nums[mid] >= target) {
      return bsLeft(left, mid-1);
    } else {
      return bsLeft(mid+1 ,right)
    }

  }
  let rightAns = -1;
  const bsRight = (left, right) => {
    if(left > right)return -1;
    let mid = Math.floor((left+right)/2)
    if(nums[mid]  === target) {
      rightAns = mid;
    }
    if(nums[mid] > target) {
      return bsRight(left, mid-1);
    } else {
      return bsRight(mid+1 ,right)
    }

  }
  bsLeft(0, nums.length-1);
  bsRight(0, nums.length-1);
  return [leftAns, rightAns];
};

let firstTestRes = searchRange([5,7,7,8,8,10], 8);
let firstTestAns = [3,4]
console.log(firstTestRes)
// console.assert(firstTestRes[0] === firstTestAns[0] & firstTestRes[1] === firstTestAns[1], '[3,4]')