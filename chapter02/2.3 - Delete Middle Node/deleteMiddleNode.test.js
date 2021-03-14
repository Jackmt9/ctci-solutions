const LinkedList = require('./deleteMiddleNode').LinkedList
const deleteMiddleNode = require('./deleteMiddleNode').deleteMiddleNode

test('Last node', () => {
    const head = new LinkedList(1)
    const node2 = new LinkedList(2)
    head.next = node2
   
    const expectedLinkedList = new LinkedList(1)
    expectedLinkedList.next = new LinkedList(2)

    expect(deleteMiddleNode(node2)).toBe(false)
    expect(head).toEqual(expectedLinkedList)
})


// Problems with below tests!
test('Second to last node', () => {
    const head = new LinkedList(1)
    const middleNode = new LinkedList(2)
    head.next = middleNode
    head.next.next = new LinkedList(3)
   
    const expectedLinkedList = new LinkedList(1)
    expectedLinkedList.next = new LinkedList(3)

    expect(deleteMiddleNode(middleNode)).toBe(true)
    expect(head).toEqual(expectedLinkedList)
})

test('Middle node with two nodes to right', () => {
    const head = new LinkedList(1)
    const middleNode = new LinkedList(2)
    head.next = middleNode
    head.next.next = new LinkedList(3)
    head.next.next.next = new LinkedList(4)
   
    const expectedLinkedList = new LinkedList(1)
    expectedLinkedList.next = new LinkedList(3)
    expectedLinkedList.next.next = new LinkedList(4)

    expect(deleteMiddleNode(middleNode)).toBe(true)
    expect(head).toEqual(expectedLinkedList)
})