const {expect, test} = require('jest');
const firstNotSmaller = (arr, target) => {

}


test('valid', ()=> {
  expect(firstNotSmaller([1,3,3,5,8,8,10], 2)).toBe(1)
  expect(firstNotSmaller([0], 0)).toBe(0)
  expect(firstNotSmaller([1,2,3,4,5,6,7,8,9,10], 10)).toBe(9);
})