// Delete Middle Node: Implement an algorithm to delete a node in the middle (Le., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.


class LinkedList {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// O(n) time | O(1) space
function deleteMiddleNode(head) {

    let length = 0

    let runner = head

    // Sets length to be the total amount of nodes
    while (runner !== null) {
        length++
        runner = runner.next
    }

    // If less than two nodes don't do anything
    if (length <= 2) return

    let node = head

    // Removes the lower middle number in an even amount of nodes
    for (let i = 0; i < Math.ceil(length / 2) - 2; i++) {
        node = node.next
    }

    node.next = node.next.next
}


exports.LinkedList = LinkedList
exports.deleteMiddleNode = deleteMiddleNode