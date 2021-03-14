// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)


// O(n) time | O(n) space
function isPalindromePermutation(string) {
    let oddFreqCount = 0
    const freq = {}

    for (const char of string) {
        // Only runs if char is an English letter (skips spaces)
        if (char.toLowerCase() != char.toUpperCase()){
            freq[char] ? freq[char]++ : freq[char] = 1;
            (freq[char] % 2 === 0) ? oddFreqCount-- : oddFreqCount++
        }
    }

    return oddFreqCount <= 1
}


// Constraints:
// Case Sensitive
// Whitespace ignored


module.exports = isPalindromePermutation