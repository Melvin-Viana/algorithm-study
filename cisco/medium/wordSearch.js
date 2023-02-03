const exist = (board, word) => {

  const ops = [
    (x, y) => [x-1, y],
    (x, y) => [x+1, y],
    (x, y) => [x, y-1],
    (x, y) => [x, y+1]
  ]
  const n = board.length;
  const m = board[0].length;
  const dfs = ([x,y], path) => {
    let index = path.length;
    if(path === word) return true;

    board[x][y] = '?';
    for (let op of ops) {
      let [nextX, nextY] = op(x,y);
      if(nextX < 0 || nextY < 0) continue;
      if(nextX >= n || nextY >= m) continue;
      if(word[index] !== board[nextX][nextY]) continue;
      if(dfs([nextX, nextY], path + board[nextX][nextY])) return true;
    }
    board[x][y] = word[index-1];
    return false;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {

      if(word[0] !== board[i][j]) continue;
      if(dfs([i,j], word[0])) return true;
    }
  }
  return false;

}