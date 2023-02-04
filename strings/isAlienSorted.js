var isAlienSorted = function(words, order) {
  const n = words.length;

  const map = {};
  for (let i = 0; i < order.length; i++) map[order[i]] = i;

  for (let [i, word] of words.entries()) {
    if(i + 1 === words.length) return true;
    let nextWord = words[i+1];
    for (let j = 0; j < word.length; j++) {
      let wordValOne = map[word[j]]
      if( j === nextWord.length) return false;
      let wordValTwo = map[nextWord[j]];
      if(wordValOne > wordValTwo) return false;
      if(wordValOne < wordValTwo) break;
    }
  }

};