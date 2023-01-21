const removeSubfolders = (folder)  => {
  const folders = {};
  const ans = new Set()
  folder.sort();
  for (let dir of folder) {
      let hasParent = false;
      const f = dir.split('/');
      let chars = ''
      for (let i =1 ; i < f.length ;i++) {
          chars += '/' + f[i];
          if(ans.has(chars)) {
              hasParent = true
              break;
          }
      }
      if(!hasParent)ans.add(dir)
  }
  return [...ans]
};