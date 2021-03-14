const LinkedList = require('./partition').LinkedList
const partition = require('./partition').partition

// Test Error!
test('List = 5 -> 3 -> 2, k = 2', () => {
    const head = new LinkedList(5)
    head.next = new LinkedList(3)
    head.next.next = new LinkedList(2)
   
    const headCopy = new LinkedList(5)
    headCopy.next = new LinkedList(3)
    headCopy.next.next = new LinkedList(2)

    const expectedLinkedList = new LinkedList(2)
    expectedLinkedList.next = new LinkedList(5)
    expectedLinkedList.next.next = new LinkedList(3)

    expect(partition(head, 2)).toEqual(expectedLinkedList)
    expect(head).toEqual(headCopy)
})