const twoSum = require('./twoSum')

test('[3,9], 12', () => {

  expect(twoSum([3,9],12)).toEqual(expect.arrayContaining([0,1]))

})
