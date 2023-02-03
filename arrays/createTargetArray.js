const createTargetArray = (nums, index) => {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    //Insert nums[i] to index[i]
    output.splice(index[i], 0, nums[i])
  }
  return output;
}