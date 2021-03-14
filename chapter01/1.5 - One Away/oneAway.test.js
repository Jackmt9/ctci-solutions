const isValid = require('./oneAway')

test('One removal', () => {
    expect(isValid('pale', 'pae')).toBe(true)
})

test('Two removals', () => {
    expect(isValid('pale', 'pa')).toBe(false)
})

test('One insertion', () => {
    expect(isValid('pale', 'palye')).toBe(true)
})

test('Two insertions', () => {
    expect(isValid('pale', 'pjalye')).toBe(false)
})

test('One replacement', () => {
    expect(isValid('pale', 'paye')).toBe(true)
})

test('Two replacements', () => {
    expect(isValid('pale', 'puye')).toBe(false)
})

test('No edits', () => {
    expect(isValid('pale', 'pale')).toBe(true)
})