// Check Permutation: Given two strings,write a method to decide if one is a permutation of the other.
// Hints: #7, #84, #722, #737


// O(n) time | O(n) space
function isPermutation(s1, s2) {
    if (s1.length !== s2.length) return false

    let freq = {}

    for (const char of s1) {
        freq[char] ? freq[char]++ : freq[char] = 1
    }

    for (const char of s2) {
        freq[char]--
        if (freq[char] < 0) return false
    }

    return true
}

// O(n log n) time | O(n) space
// function isPermutation(s1, s2) {
//     if (s1.length !== s2.length) return false

//     const sortedS1 = s1.split('').sort().join('')
//     const sortedS2 = s2.split('').sort().join('')

//     return sortedS1 === sortedS2
// }


// Limitations:
// Case Sensitive
// Whitespace is significant


module.exports = isPermutation