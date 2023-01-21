const kWeakestRows = function(mat, k) {
   
    const m = mat.length;
    const n = mat[0].length;
    const soldiers = Array.from({length : n+1}, () => []);

    for (let [i,row] of mat.entries()) {
        let sum = row.reduce((a,b)=>a+b, 0);
        soldiers[sum].push(i);
    }
    const ans = []
    for(let i = 0; k !== 0;) {
        while(soldiers[i].length && k !== 0) {
            ans.push(soldiers[i].shift())
            k--;
        }
        i++;
    }
    return ans;
};
