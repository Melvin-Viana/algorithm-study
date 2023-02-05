// My solution : Brute force:
  // Go through ranges l to r
  // Count the vowel strings from each range manually

//Optimized:
//Intuition : prefix sum
  // Count values prefix sum
  // Get left index sum
  // Get right index sum
  // All sums to the left index is not needed so:
    // Subract prefixSum[r+1] - prefixSum[l]

const vowelStrings = (words, queries) => {
  const vowels = new Set('aeiou');
  const output = [];
  const count = new Array(words.length).fill(0);
  for (let i = 0;i < words.length; i++) {
      let start = words[i][0];
      let end = words[i][words[i].length-1];
      if(vowels.has(start) && vowels.has(end)) {
        count[i+1] = count[i] + 1;
      } else {
        count[i+1] = count[i];
      }
  }
  for (let [l, r] of queries) {
      let c = count[r+1] - count[l];

      output.push(c);
  }
  return output;
};
