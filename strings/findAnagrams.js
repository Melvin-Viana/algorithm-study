// Hash map + Sliding Window
// Counting the number of characters for each substring, w/ same length as p
    //If the num of characters match, push the starting index into the output array

var findAnagrams = function(s, p) {
    if(s.length === 0 || p.length === 0) return []

    const count = new Map();
    for (let char of p) {
      if(!count.has(char)) count.set(char, 0);
      count.set(char, count.get(char) + 1);
    }
    const found = new Set();
    for (let i = 0; i < p.length; i++) {
      if(!count.has(s[i])) continue;
      count.set(s[i], count.get(s[i]) - 1);
      if(count.get(s[i]) === 0) found.add(s[i]);
      else if(count.get(s[i]) < 0) found.delete(s[i]);
    }
    const output = []
    const n = p.length;
    const m = s.length;
    const end = m - n + 1
    if(found.size === count.size) output.push(0);
    for (let i = 1; i < end; i++) {
      let start = i - 1
      let end = i+n-1
      if(count.has(s[start]))
      {
        count.set(s[start], count.get(s[start]) + 1);
        if(count.get(s[start]) === 0) found.add(s[start])
        else if(count.get(s[start]) > 0) found.delete(s[start])
      }
      if(count.has(s[end])) {
        count.set(s[end], count.get(s[end]) - 1);
         if(count.get(s[end]) === 0) found.add(s[end])
         else if(count.get(s[end]) < 0) found.delete(s[end])
      }

      if(found.size === count.size) output.push(i);
    }
    return output;
};

// Pretty inefficient, and very lengthy in code
// Need to make more efficient