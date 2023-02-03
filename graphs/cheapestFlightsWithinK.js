
var findCheapestPrice = function(n, flights, src, dst, k) {

  const graph = [];
  const createGraph = () => {
      for (let i = 0; i < flights.length; i++) {
          const [from, to, price] = flights[i];
          if(graph[from] === undefined) graph[from] = [];
          graph[from].push({
              loc: to,
              price
          });
      }
  }
  const visited = {};
  const dfs = (root, count) => {
    const key = `${root}-${count}`;
      let min = Infinity;
      if(root === dst) {
          return 0;
      }
      if(count > k) return -1;
      if(graph[root] === undefined) return -1;
      if(visited[key]) return visited[key];

      for (let node of graph[root]) {
          const total = dfs(node.loc, count+1);
          if(total === -1) continue;
          min = Math.min(min, total + node.price);
      }
      visited[key] = min;
      return min === Infinity ? -1 : min;
    }
  createGraph();
  let ans = dfs(src,0);
  return ans === Infinity ? -1 : ans;
};

// Create a graph

// Directed graph

// There could be cycles

// DFS
  // Prune the uncessary trees
    //1. Steps outside of K
    //2. Steps that don't reach the dest
    //3. Paths that were already went through
  //Go to the very last node which is dest node, then go up  and add all the min prices upwards till we get to our src node


  //BOTTOM UP DFS