const isAnagram = (s, t) => {

  //Tranforming into array and sorting the strings and comparing
  return [...s].sort().join('') === [...t].sort().join('');
}

console.log(isAnagram('aa', 'AA'))
