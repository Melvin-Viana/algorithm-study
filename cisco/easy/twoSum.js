const twoSum = (arr) => {
  for (let [i, num] of arr.entries()) {
    let diff = target - num;

    if(seen.has(diff)) return [i, seen.get(diff)];
    seen.set(num, i);
  }
}