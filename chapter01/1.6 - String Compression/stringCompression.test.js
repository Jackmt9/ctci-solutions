const compressString = require('./stringCompression')

test('string = "aabcccccaaa"', () => {
    expect(compressString("aabcccccaaa")).toBe("a2b1c5a3")
})

test('string = "aabcccaaddac"', () => {
    expect(compressString("aabcccaaddac")).toBe("aabcccaaddac")
})

test('string = "abbbcddddd"', () => {
    expect(compressString("abbbcddddd")).toBe("a1b3c1d5")
})

test('string = "abc"', () => {
    expect(compressString("abc")).toBe("abc")
})