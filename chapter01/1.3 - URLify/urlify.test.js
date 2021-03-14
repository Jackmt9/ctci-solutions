const replaceSpaces = require('./urlify')

test('string = "Mr John Smith ", length = 13', () => {
    expect(replaceSpaces("Mr John Smith ", 13)).toBe("Mr%20John%20Smith")
})