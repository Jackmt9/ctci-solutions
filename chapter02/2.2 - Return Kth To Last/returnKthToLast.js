// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list. 


class LinkedList {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// O(n) time | O(1) space
function kthToLast(head, k) {
    let pointer1 = head
    let pointer2 = head

    for (let i = 0; i < k; i++){
        pointer2 = pointer2.next
    }

    while (pointer2 !== null) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }

    return pointer1
}


exports.LinkedList = LinkedList
exports.kthToLast = kthToLast