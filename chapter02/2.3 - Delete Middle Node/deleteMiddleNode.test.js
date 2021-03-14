const LinkedList = require('./deleteMiddleNode').LinkedList
const deleteMiddleNode = require('./deleteMiddleNode').deleteMiddleNode

test('Linked list with 2 nodes', () => {
    const head = new LinkedList(1)
    head.next = new LinkedList(2)
   
    const expectedLinkedList = new LinkedList(1)
    expectedLinkedList.next = new LinkedList(2)

    deleteMiddleNode(head)
    expect(head).toEqual(expectedLinkedList)
})

test('Linked list with 3 nodes', () => {
    const head = new LinkedList(1)
    head.next = new LinkedList(2)
    head.next.next = new LinkedList(3)
   
    const expectedLinkedList = new LinkedList(1)
    expectedLinkedList.next = new LinkedList(3)

    deleteMiddleNode(head)
    expect(head).toEqual(expectedLinkedList)
})

test('Linked list with 4 nodes', () => {
    const head = new LinkedList(1)
    head.next = new LinkedList(2)
    head.next.next = new LinkedList(3)
    head.next.next.next = new LinkedList(4)
   
    const expectedLinkedList = new LinkedList(1)
    expectedLinkedList.next = new LinkedList(3)
    expectedLinkedList.next.next = new LinkedList(4)

    deleteMiddleNode(head)
    expect(head).toEqual(expectedLinkedList)
})