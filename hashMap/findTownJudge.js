const findJudge = (n,arr) => {
  const trusts = new Array(n).fill(0);
  for(let [a,b] of arr) {
    trusts[a-1]--;
    trusts[b-1]++;
  }
  return trusts.indexOf(n-1) + 1 || -1;
}