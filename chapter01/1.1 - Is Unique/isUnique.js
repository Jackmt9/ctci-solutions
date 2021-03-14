// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
// Hints: #44, #7 7 7, #732


// O(n) time | O(n) space
function isUnique(string) {
    const freq = {}
    for (const char of string){
        if (freq[char]){
            return false
        } else {
            freq[char] = true
        }
    }
    return true
}

// O(n^2) time | O(1) space
// function isUnique(string) {
//     for (let i = 0; i < string.length; i++){
//         for (let j = i + 1; j < string.length; j++){
//             if (string[i] === string[j]) return false
//         }
//     }
//     return true
// }


// Tests


// describe("See if string is composed of soley unique characters", () => {
//     it("s = 'taco'", () => {
//         expect(isUnique('taco')).toEqual(true)
//     })
//     it("s = 'avocado'", () => {
//         expect(isUnique('avocado')).toEqual(false)
//     })
//     it("s = 'marshmello'", () => {
//         expect(isUnique('marshmello')).toEqual(false)
//     })
//     it("s = 'aaaaa'", () => {
//         expect(isUnique('aaaaa')).toEqual(false)
//     })
// })