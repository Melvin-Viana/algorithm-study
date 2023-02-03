const solution = (isBadversion) => {

  return (r) => {
    let l = 0;
    while (l < r) {
      let m = Math.floor((l+r)/2);
      if(!isBadversion(m)) l = m + 1
      else r = m;
    }

    return l;
  }
}