
//BRUTE FORCE:
// Create graph
// Calculate good paths for each node by doing dfs on each node
// const numberOfGoodPaths = function(vals, edges) {
// 	const graph = new Map();
// 	let goodPaths = 0;

// 	for (const [a,b] of edges) {
// 		if (graph.has(a))
// 			graph.get(a).push(b);
// 		else
// 			graph.set(a, [b]);

// 		if (graph.has(b))
// 			graph.get(b).push(a);
// 		else
// 			graph.set(b, [a]);
// 	}

//   function dfs(visited, start, curr) {
//     if (start !== curr && vals[start] === vals[curr]) goodPaths++;

//       visited[curr] = true;

//       for (const child of graph.get(curr)) {
//           if (!visited[child] && vals[child] <= vals[start])
//               dfs(visited, start, child);
//       }
//     }

// 	for (const key of graph.keys()) {
// 		const visited = new Array(vals.length).fill(false);
// 		dfs(visited, key, key);
// 	}

// 	return goodPaths / 2 + vals.length;
// };


//LC 684 - Union Find - Find if a set of nodes are connected to each other or not

// Disjoint set
class UnionFind {
  constructor(n) {
    this.parents = [...Array(n).keys()];
    this.rank =  Array.from({length: n} , ()=>0);
  }

  find(i) {
    while (i !== this.parents[i]) {
      this.parents[i] = this.parents[this.parents[i]];
      i = this.parents[i];
    }
    return i;
  }

  union(a, b) {
    let aRoot = this.find(a);
    let bRoot = this.find(b);


    if(aRoot === bRoot) return false;
    if(this.rank[aRoot] < this.rank[bRoot]) {
      this.parents[aRoot] = bRoot;
      this.rank[bRoot] += this.rank[aRoot];
    } else {
      this.parents[bRoot] = aRoot;
      this.rank[aRoot] += this.rank[bRoot];
    }
  }
}
const numberOfGoodPaths = (vals, edges) => {
    //Greedy

    //Start with smalllest values - Sort the values


    // Maps all the values to a node


    // Union find on each node

      //Find your "good paths"



};
