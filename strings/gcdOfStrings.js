const gcdOfStr = (str1, str2) => {
  const s1length = str1.length;
  const s2length = str2.length

  const checkForGcd = (str1, str2) => {
    let gcd = ''

    for (let i = 0; i < str1.length; i++) {
      if(str2[i] !== str1[i]) break;
      //Generate substrings
      let substr = str2.slice(0, i+1);
      let endOfStr2 = str2.slice(i+1);

      //Multiple of current divisor

      let m = str1.length/substr.length;
      if(Math.floor(m) !== m) continue;
      let count = 0;
      while(endOfStr2.slice(0,substr.length) === substr) endOfStr2 = endOfStr2.slice(substr.length)
      if(endOfStr2 !== '') continue;
      let copyStr1 = str1;
      while(copyStr1.slice(0, substr.length) === substr) {
        copyStr1 = copyStr1.slice(substr.length)
      }
      if(copyStr1 !== '') continue;

      gcd = substr;

    }
    return gcd;
  }
  if(s1length > s2length)
  {
    return checkForGcd(str1, str2)
  } else {
    return checkForGcd(str2, str1)
  }

}
console.log(gcdOfStr('abab', 'ababab'))
console.log(gcdOfStr('abab', 'abababab'))
console.log(gcdOfStr('leet', 'code'))
