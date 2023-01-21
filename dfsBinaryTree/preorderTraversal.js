const preorderTraversal = (root) => {
  const ans = [];
  const dfs = node => {
    if(!node) return;
    ans.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  return ans;
};