// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true 
// pales, pale -> true 
// pale, bale -> true 
// pale, bake -> false


// O(n) time | O(n) space
function isValid(string1, string2) {
    // longer and shorter string
    const s1 = string1.length > string2.length ? string1 : string2 
    const s2 = string1.length > string2.length ? string2 : string1 

    if ((s1.length - s2.length) > 1) return false

    let idx1 = 0
    let idx2 = 0

    let foundDifference = false

    while (idx1 < s1.length && idx2 < s2.length) {
        if (s1[idx1] !== s2[idx2]){
            if (foundDifference) return false

            foundDifference = true

            // handles replace
            if (s1.length === s2.length){
                idx1++
            } 
            // handles insert and delete
            else {
                idx1++
            }

        } else {
            idx1++
        }
        idx2++
    }
    return true
}

console.log(isValid('pale', 'pa'))

module.exports = isValid