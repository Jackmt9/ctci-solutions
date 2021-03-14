const isSubstring = require('./stringRotation')

test('s1 = "waterbottle", s2 = "erbottlewat"', () => {
    expect(isSubstring("waterbottle", "erbottlewat")).toBe(true)
})

test('s1 = "test", s2 = "ttes"', () => {
    expect(isSubstring("test", "ttes")).toBe(true)
})

test('s1 = "melon", s2 = "lemon"', () => {
    expect(isSubstring("melon", "lemon")).toBe(false)
})

test('s1 = "apple", s2 = "eapple"', () => {
    expect(isSubstring("apple", "eapple")).toBe(false)
})

test('s1 = "eapple", s2 = "apple"', () => {
    expect(isSubstring("eapple", "apple")).toBe(false)
})