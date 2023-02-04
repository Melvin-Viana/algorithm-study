const separateDigits = nums => {
  const output = [];
  for (let num of nums) output.push(...num.toString('').split().map(Number))
  return output;
}