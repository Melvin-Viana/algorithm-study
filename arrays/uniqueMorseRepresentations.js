const uniqueMorseRepresentations = (words) => {
  const set = new Set();
  const codes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--",
  "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
  for (let word of words) {
    let res = ''
    for(let char of word) res += codes[char.charCodeAt(0) - 97];
    set.add(res);
  }
  return set.size;
}