const LinkedList = require('./removeDups').LinkedList
const removeDups = require('./removeDups').removeDups



test('One duplicate', () => {
    const head = new LinkedList(1)
    head.next = new LinkedList(2)
    head.next.next = new LinkedList(2)
   
    const expectedLinkedList = new LinkedList(1)
    expectedLinkedList.next = new LinkedList(2)

    removeDups(head)
    expect(head).toEqual(expectedLinkedList)
})

test('Two duplicates', () => {
    const head = new LinkedList(1)
    head.next = new LinkedList(2)
    head.next.next = new LinkedList(2)
    head.next.next.next = new LinkedList(3)
    head.next.next.next.next = new LinkedList(3)
   
    const expectedLinkedList = new LinkedList(1)
    expectedLinkedList.next = new LinkedList(2)
    expectedLinkedList.next.next = new LinkedList(3)

    removeDups(head)
    expect(head).toEqual(expectedLinkedList)
})