const isUnique = require('./isUnique')

test('string = "avocado"', () => {
    expect(isUnique('avocado')).toBe(false)
})

test('string = "cucumber"', () => {
    expect(isUnique('cucumber')).toBe(false)
})

test('string = "apple"', () => {
    expect(isUnique('apple')).toBe(false)
})

test('string = "pickle"', () => {
    expect(isUnique('pickle')).toBe(true)
})