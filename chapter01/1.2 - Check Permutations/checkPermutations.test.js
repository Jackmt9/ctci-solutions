const isPermutation = require('./checkPermutations')

test('s1 = "done", s2 = "node"', () => {
    expect(isPermutation("done", "node")).toBe(true)
})

test('s1 = "octopus", s2 = "cotosup"', () => {
    expect(isPermutation("octopus", "cotosup")).toBe(true)
})

test('s1 = "cat", s2 = "cath"', () => {
    expect(isPermutation("cat", "cath")).toBe(false)
})

test('s1 = "fish", s2 = "shiff"', () => {
    expect(isPermutation("fish", "shiff")).toBe(false)
})