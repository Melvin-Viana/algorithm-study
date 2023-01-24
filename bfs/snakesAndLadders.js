const snakesAndLadders = (board) => {
  // Start at 1


  //Choose a dest square next
  //[curr + 1, min(curr + 6, n2)]
    //next position
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
  const visited = {};
  const queue = [[1, positions[1], 0]];
  while (queue.length) {
    const [currPos, [row, col], moves] = queue.shift()
    visited[currPos] = true;
    if (currPos === end) return moves;
    let endPos = Math.min(currPos + 6, end);
    for (let i = currPos; i <= endPos; i++) {
      if(visited[i] === true) continue;
      const [nextRow, nextCol] = positions[i];
      let posVal = board[nextRow][nextCol]
      if(posVal !== -1) queue.push([posVal, positions[posVal], moves+1]);
      else queue.push([i, positions[i], moves+1])
    }
  }

}
