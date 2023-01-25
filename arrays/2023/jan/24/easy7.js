const countAsterisks = (s) => {
  s = s.split('|');
  let output = 0;
  for (let i = 0; i < s.length; i+=2) {
    const chars = s[i].split('');
    output += chars.filter(c=>c==='*').length;
    if(i+1 > s.length) continue;
  }
  return output;
};

