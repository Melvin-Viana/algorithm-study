const data = require('./getData')('day20.txt').split('\n');

// const numbers = data.map(Number);
// const list = data.map((c,i)=>([c,i]));

//Part One:

const numbers = data.map(Number);
const list = data.map((x, i) => ({num: x, id: i}));
const list2 = [...list];
for(let i = 0; i < numbers.length; i++) {
    const id = list.findIndex(x => x.id=== i);
    list.splice(id, 1);
    console.log((numbers[i] + id) % list.length);
    list.splice((numbers[i] + id) % list.length, 0, {num: numbers[i], id: i});
}

const zeroId = list.findIndex(x => x.num === 0);
const positions = [1000, 2000, 3000]
const sum = positions.reduce((acc, val) => acc + list[(val + zeroId) % list.length].num, 0)

//Part Two:

// const times = 10;
// const DECRYPTION_KEY = 811589153;
// const numbers = input.map(x => x * DECRYPTION_KEY);
// const list = input.map((x, i) => ({num: x * DECRYPTION_KEY, id: i}));

// for(let repeating = 0; repeating < times; repeating++) {
//     for(let i = 0; i < numbers.length; i++) {
//         const id = list.findIndex(x => x.id === i);
//         list.splice(id, 1);
//         list.splice((numbers[i] + id) % list.length, 0, {num: numbers[i], id: i});
//     }
// }

// const zeroId = list.findIndex(x => x.num === 0);
// const positions = [1000, 2000, 3000]
// const sum = positions.reduce((acc, val) => acc + list[(val + zeroId) % list.length].num, 0)

// console.log(sum);