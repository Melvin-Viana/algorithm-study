const snakesAndLadders = (board) => {

  const n = board.length;
  const m = board[0].length;
  const end = n * n;

  const positions = Array.from({length: end+1}, () => [0,0]);
  let flip = false;
  let pos = 1;
  for (let i = n-1; i >= 0; i--) {
    if(flip) {
      for (let j = m -1; j >=0; j--) {
        positions[pos][0] = i;
        positions[pos][1] = j;
        pos++;
      }
    } else {
      for (let j = 0; j < m; j++) {
        positions[pos][0] = i;
        positions[pos][1] = j;
        pos++;
      }
    }
    flip = !flip
  }
  const visited = new Set();
  visited.add(1);
  const queue = [[1, 0]];
  while (queue.length) {
    const [currPos, moves] = queue.shift()
    if (currPos === end) return moves;
    let endPos = Math.min(currPos + 6, end);
    for (let i = currPos+1; i <= endPos; i++) {
      const [nextRow, nextCol] = positions[i];
      let posVal = board[nextRow][nextCol]
      let next = i;
      if(posVal !== -1) next = posVal;
      if(!visited.has(next)) {
          queue.push([next, moves+1]);
          visited.add(next);
      }
    }
  }
  return -1;
}