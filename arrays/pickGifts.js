//Brute Force
  // Sort values least to greatest
  // Remove from the end, sqrt it
  // Resort
  // O((logn)^k)

// Max Heap:
  //AVAILABLE In leetcode environment:
  //https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-
  // new MaxPriorityQueue()
  // dequeue() => gets max value
  // enqueue() => places value in correct pos
const pickGifts = (gifts, k) => {
  gifts.sort((a,b) => a-b);
  let end = gifts.length - 1;
  while (k--) {
    gifts[end] = Math.floor(Math.sqrt(gifts[end]));
    gifts.sort((a,b)=>a-b);
  }
  return gifts.reduce((a,b)=>a+b);
};