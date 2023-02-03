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
    return true;
  }
}