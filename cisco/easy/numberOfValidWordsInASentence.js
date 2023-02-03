const countValidWords = (sentence) => {

  //   sentence = sentence.replace(/\s+/g, ' ').trim(); // Trim then end and trim the inbetween

    const words = sentence.split(' ');
    const hyphen = '-';
    const punctuations = new Set('!.,');
    const alphas = new Set('abcdefghijklmnopqrstuvwxyz');

    return words.filter((word) => {
      if(word === '') return false;
      let i = 0;
      let n = word.length;
      if(punctuations.has(word[n-1])) [word,n] = [word.substring(0,n-1),n-1];
      if(word[0] === hyphen || word[n-1] === hyphen) return false;
      let foundHyphen = false;
      for (let char of word) {
      //All characters are alphas
      if(alphas.has(char)) {i++; continue};
      if(char === hyphen && !foundHyphen) {
        foundHyphen = true;
        i++;
        continue;
      }
      //Not a hyphen or alpha return false;
      return false;
    }
      return true;
    }).length
  }