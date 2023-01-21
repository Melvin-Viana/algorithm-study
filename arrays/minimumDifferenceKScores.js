const minimumDifference = (nums, k) => {
    nums.sort((a,b)=> a - b);
    let left = 0, right = k - 1;
    let minDiff = Infinity;
    const n = nums.length
    //Sliding window
    while( right < n){
        minDiff = Math.min(minDiff, nums[right] - nums[left]);
        left++;
        right++;
    }
    return minDiff;
};
