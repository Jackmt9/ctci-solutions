// Delete Middle Node: Implement an algorithm to delete a node in the middle (Le., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
// EXAMPLE
// Input: the node c from the linked list a- >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f


class LinkedList {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// O(n) time | O(1) space
function deleteMiddleNode(node) {
    if (node === null || node.next === null) return false

    node.data = node.next.data
    node.next = node.next.next

    return true
}


// Constraints:
// - Unable to tell if node is head of list


exports.LinkedList = LinkedList
exports.deleteMiddleNode = deleteMiddleNode