const findMaxConsecutiveOnes = (nums) =>{
    let output = 0;
    let curr = 0;
    for (let num of nums) {
        if (num === 1) curr++;
        else curr = 0;
        if(curr > output) output = curr;
    }
    return output;

};
