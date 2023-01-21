const restoreIpAddresses = s => {
  const res = new Set();
  const n = s.length;
  const dfs = (index, countOfDots, path) => {
      if(countOfDots ===4) {
          if(index < n && path.length === n+3) res.add(path);
          return;
      }
     for (let i = 1; i < 4; i++) {
         let num = s.slice(index+1, index+i+1);
         if(Number(num) > 255) continue;
         if(Number(num)+'' !== num) continue;
         dfs(index+i, countOfDots + 1, path + '.' + num);
     }
  }
  for (let i = 0; i < 3; i++) {
      let num = s.slice(0,i+1)
      if(Number(num) > 255 ) continue;
      if(Number(num)+'' !== num) continue;
      dfs(i, 1, num);
  }
  return [...res];
};