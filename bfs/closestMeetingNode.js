const closestMeetingNode = (edges, node1, node2) => {
  //Initialize graph
  const graphs = Array.from({length: edges.length} , () => new Array());
  for (let [i, edge] of edges.entries()) {
    if(edge === -1) continue;
    graphs[i].push(edge)
  }
  const bfs = (src, distMap) => {
    const queue = [];
    queue.push([src, 0]);
    distMap[src] = 0;
    while(queue.length) {
      let  [node, dist ] = queue.shift();
      for (nei of graphs[node]) {
        if(!(nei in distMap)) {
          queue.push([nei, dist + 1]);
          distMap[nei] = dist + 1;
        }
      }
    }
  }
  const node1Dist = {}
  const node2Dist = {}

    bfs(node1, node1Dist);
    bfs(node2, node2Dist);
    let res = -1;
    let resDist = Infinity;
    for (let i =0; i < edges.length; i++) {
    if(i in node1Dist && i in node2Dist) {
        let dist  = Math.max(node1Dist[i], node2Dist[i]);
        if(dist < resDist) {
        res = i;
        resDist = dist;
        }
    }
    }
    return res;
}
