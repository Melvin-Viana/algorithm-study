const lines = require('./getData')('day19.txt').split('\n');
// DECISION TREE PRUNING
// 5^N => n = minutes
const MAX_MINUTE = 24;
const dfs = (bp, maxSpend, cache, time, bots, oreCount) => {
  if(time === 0) {
    return oreCount[3];
  }
  const key = JSON.stringify([time, ...bots,...oreCount]);
  if(cache[key]) return cache[key];

  let maxVal = oreCount[3] + bots[3] * time;

  for (let [bType, recipe] of bp.entries()) {
    //Check do we want more of this bot?
    if(bType !== 3 && bots[bType] >= maxSpend[bType]) continue;
    let wait = 0;
    let canBuild = true;
    for (let [rAmt, rType] of recipe) {
      if(!bots[rType]) {
        canBuild = false;
        break;
      }
      // (Recipe amount - amount of current ore) / amount of bots for ore type
      wait = Math.max(wait,Math.ceil((rAmt - oreCount[rType])/ bots[rType]));
    }
    if(canBuild) {
      //Remaining time to create the rest of branches in decision tree
      let remTime = time - wait - 1;
      if(remTime <= 0) continue;
      let botsCopy = [...bots];
      let oreCountCopy = [...oreCount].map((c,i) => {
        let bot = bots[i];
        return c + (bot * (wait + 1));
      })
      for (let [rAmt, rType] of recipe) oreCountCopy[rType] -= rAmt;
      botsCopy[bType]+=1;
      maxVal = Math.max(maxVal, dfs(bp, maxSpend, cache, remTime, botsCopy, oreCountCopy));
    }
  }
  cache[key] = maxVal;
  return maxVal;
}

const blueprintVals = [];
// const regexp = /Blueprint (?<id>\d+): Each ore robot costs (?<oreRoboOreCost>\d+) ore. Each clay robot costs (?<clayRoboOreCost>\d+) ore. Each obsidian robot costs (?<obsidRoboOreCost>\d+) ore and (?<obsidRoboClayCost>\d+) clay. Each geode robot costs (?<geodeRoboOreCost>\d+) ore and (?<geodeRoboObsidCost>\d+) obsidian./
const blueprints =[]
let total = 0;
for (let [i,line] of lines.entries()) {
  //DFS through all options
  const id = Number(i+1);
  const bp = [];
  const regexp = /(d\+)/
  const maxspend = [0,0,0]
  for (section of line.split(': ')[1].split('. ')) {
    const recipe = [];
    const res = section.match(/(\d+) (\w+)/g).map(val=>val.split(' '))

    for (let [count, ore] of res) {
      count = Number(count)
      ore = ['ore', 'clay', 'obsidian'].indexOf(ore);
      recipe.push([count, ore])
      maxspend[ore] = Math.max(maxspend[ore], count);
    }
    bp.push(recipe);
  }
  let v = dfs(bp, maxspend, {},MAX_MINUTE, [1,0, 0, 0],  [0,0,0,0]);
  total += id* v;
}
console.log(total)