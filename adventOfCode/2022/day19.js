const lines = require("./getData")("day19.txt").split("\n");
// DECISION TREE PRUNING
//Brute Force: 5^N => n = minutes
// Optimizations:
// 1. Caching states
// 2. Maximizing the number of bots (spend rate of the ore)
// 3. At each turn if you cant spend all the resources you can have by the end, you can throw the ones you dont need.
//    Caching is easier with this

// Pseudocode:
/**
 * 1. Parse Data
 *  - Seperate blueprint data for each ore.
 *  - Max spend data
 * 2. DFS with blueprint data
 *  - Gather each ore cost data
 *  - Robot count is initially 1 ore robot, 0 clay robot, 0 obsid robot, 0 geode robot
 *  - Attempt to build robot types and calculate time to create the robot
 *   4 Different Decision Trees
 *    a. Do Nothing - Calculate number of geodes you can make with available resources (ores, bots, time)
 *    b. Calculate number of Ores robos can buy
 *    c. Calculate number of Clay robos can buy
 *    d. Calc number of Obsidian robos can buy
 *  - Return maximum amount of geodes
 * 3.  Calculate quality of blueprint (max geode production * id)
 */

const blueprints = [];
for (let [i, line] of lines.entries()) {
  //DFS through all options
  const id = Number(i + 1);
  const bp = [];
  const regexp = /(\d+) (\w+)/g;
  const maxspend = [0, 0, 0];
  for (section of line.split(": ")[1].split(". ")) {
    const recipe = [];
    const res = section.match(regexp).map((val) => val.split(" "));
    for (let [count, ore] of res) {
      count = Number(count);
      ore = ["ore", "clay", "obsidian"].indexOf(ore);
      recipe.push([count, ore]);
      maxspend[ore] = Math.max(maxspend[ore], count);
    }
    bp.push(recipe);
  }
  blueprints.push([id, bp, maxspend]);
}

const dfs = (bp, maxSpend, cache, time, bots, oreCount) => {
  if (time === 0) {
    return oreCount[3];
  }
  const key = JSON.stringify([time, ...bots, ...oreCount]);
  if (cache[key]) return cache[key];

  let maxVal = oreCount[3] + bots[3] * time; // Cre
  for (let [bType, recipe] of bp.entries()) {
    //Check do we want more of this bot?
    if (bType !== 3 && bots[bType] >= maxSpend[bType]) continue;
    let wait = 0;
    let canBuild = true;
    for (let [rAmt, rType] of recipe) {
      if (!bots[rType]) {
        canBuild = false;
        break;
      }
      // (Recipe amount - amount of current ore) / amount of bots for ore type
      wait = Math.max(wait, Math.ceil((rAmt - oreCount[rType]) / bots[rType]));
    }
    if (canBuild) {
      //Remaining time to create the rest of branches in decision tree
      let remTime = time - wait - 1;
      if (remTime <= 0) continue;
      let botsCopy = [...bots];
      let oreCountCopy = oreCount.map((c, i) => {
        let bot = bots[i];
        return c + bot * (wait + 1);
      });
      for (let [rAmt, rType] of recipe) oreCountCopy[rType] -= rAmt;
      botsCopy[bType] += 1;
      for (let i = 0; i < 3; i++)
        oreCountCopy[i] = Math.min(oreCountCopy[i], maxSpend[i] * remTime); //Part Two Optimization, throw out extra resources
      maxVal = Math.max(
        maxVal,
        dfs(bp, maxSpend, cache, remTime, botsCopy, oreCountCopy)
      );
    }
  }
  cache[key] = maxVal;
  return maxVal;
};

const partOne = blueprints
  .map(
    ([id, bp, maxspend]) =>
      id * dfs(bp, maxspend, {}, 24, [1, 0, 0, 0], [0, 0, 0, 0]))
  .reduce((a, b) => a + b, 0);

const partTwo = blueprints
  .slice(0, 3)
  .map(([id, bp, maxspend]) =>
    dfs(bp, maxspend, {}, 32, [1, 0, 0, 0], [0, 0, 0, 0])
  )
  .reduce((a, b) => a * b, 1);

console.log(partOne);
console.log(partTwo);
