// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters,and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith ", 13 
// Output: "Mr%20John%20Smith"
// Hints: #53, #118


// O(n) time | O(n) space
function replaceSpaces(string, length) {
    const array = string.split('')

    let spaceCount = 0
    for (let i = 0; i < length; i++) {
        if (array[i] === ' ') spaceCount++
    }

    // total amount of space needed
    let idx = length + spaceCount * 2

    for (let i = length - 1; i > -1; i--) {
        const char = array[i]

        if (char === ' '){
            array[idx - 1] = '0'
            array[idx - 2] = '2'
            array[idx - 3] = '%'
            idx -= 3
        } else {
            array[idx - 1] = char
            idx--
        }
    }

    return array.join('')
}


module.exports = replaceSpaces