// Remove Dups: Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

class LinkedList {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// O(n) time | O(n) space
function removeDups(head) {
    const set = new Set()

    let node = head
    let prevNode = null

    while (node !== null) {
        if (set.has(node.value)) {
            // remove node
            prevNode.next = node.next
        } else {
            // add value to set
            set.add(node.value)
        }
        prevNode = node
        node = node.next
    }
}


// O(n^2) time | O(1) space
// function removeDups(head) {
//     let node = head
    
//     while (node !== null) {
//         let runner = node
//         while (runner.next !== null) {
//             if (runner.next.value === node.value){
//                 runner.next = runner.next.next
//             } else {
//                 runner = runner.next
//             }
//         }
//         node = node.next 
//     }
// }


exports.LinkedList = LinkedList
exports.removeDups = removeDups