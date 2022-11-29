const validParentheses = require('./validParentheses');

test('Valid', () => {

  expect(validParentheses('()')).toEqual(true)
  expect(validParentheses('([])')).toEqual(true)
  expect(validParentheses('([]){}')).toEqual(true)
})
test('Invalid', () => {

  expect(validParentheses('(}')).toEqual(false)
  expect(validParentheses('(]')).toEqual(false)
  expect(validParentheses('[')).toEqual(false)
  expect(validParentheses('}(')).toEqual(false)
  expect(validParentheses('[(])')).toEqual(false)

})
