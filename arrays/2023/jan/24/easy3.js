const destCity = paths => {
  const graph = new Map();
  const start = paths[0][0];
  for (let [cityA, cityB] of paths) {
    graph.set(cityA, cityB);
  }
  const dfs = (city) => {
    if(!graph.has(city)) return city;
    return dfs(graph.get(city));
  }

  return dfs(start);

};