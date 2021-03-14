const isSubstring = require('./stringRotation')

test('s1 = "waterbottle", s2 = "erbottlewat"', () => {
    expect(isSubstring("waterbottle", "erbottlewat")).toBe(true)
})