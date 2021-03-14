// Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5] 
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8


class LinkedList {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// O(n) time | O(n) space?
// function partition(head, value) {
//     let list1Head = null
//     let list1Tail = null

//     let list2Head = null
//     let list2Tail = null

//     let node = head

//     while (node !== null) {

//         node.next = null

//         if (node.value < value) {
//             if (list1Head === null) {
//                 list1Head = node
//                 list1Tail = list1Head
//             } else {
//                 list1Tail.next = node
//                 list1Tail = node
//             }
//         } else {
//             if (list2Head === null) {
//                 list2Head = node
//                 list2Tail = list2Head
//             } else {
//                 list2Tail.next = node
//                 list2Tail = node
//             }
//         }
//         node = node.next
//     }

//     if (list1Head === null) return list2Head

//     list1Tail.next = list2Head

//     return list1Head
// }

// O(n) time | O(n) space?
function partition(head, value) {
    let mainHead = head
    let tail = head

    let node = head
    while (node !== null) {
        const next = node.next
        if (node.value < value) {
            // Insert node at head
            node.next = mainHead
            mainHead = node
        } else {
            // Insert node at tail
            tail.next = node
            tail = node
        }
        node = next
    }
    tail.next = null

    return mainHead
}


exports.LinkedList = LinkedList
exports.partition = partition

