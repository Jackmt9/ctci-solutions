const isPalindromePermutation = require('./palindromePermutation')

test('string = "taco cat"', () => {
    expect(isPalindromePermutation('taco cat')).toBe(true)
})

test('string = "taco catt"', () => {
    expect(isPalindromePermutation('taco catt')).toBe(false)
})

test('string = "p o p"', () => {
    expect(isPalindromePermutation('p o p')).toBe(true)
})