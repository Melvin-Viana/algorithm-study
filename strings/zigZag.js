// Place 0 -> i+numRows => currentIndex -> numRows
// Place numRows - 1 to first row => currIndex -> 1

const convert = (s, numRows) => {
  const rows = new Array(numRows+1).fill('');

  let row = 0;
  let step = 1;
  s= s.split('')
  for (let [i, c] of s.entries()) {
      if(rows[row] === undefined) rows[row] = ''
      rows[row] += c;
      if(row === 0){
          step = 1;
      }else if(row === numRows - 1){
          step = -1;
      }
      row += step;
  }
  return rows.join('');
};