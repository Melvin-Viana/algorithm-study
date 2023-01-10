//Recursive - DFS
const isSameTree = (p, q) => {
  if(!p || !q) return !(p||q);
  if(p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

// BFS
const sameTreeBFS = (p, q) => {
  const queue = [p,q];

  while (queue.length) {
    const p1 = queue.shift();
    const p2 = queue.shift();
    if(p1 === null && p2 === null) continue;
    if(p1 === null || p2 === null) return false;
    if(p1.val !== p2.val) return false;
    queue.push(p1.left, p2.left)
    queue.push(p1.right, p2.right)
  }
  return true;
}