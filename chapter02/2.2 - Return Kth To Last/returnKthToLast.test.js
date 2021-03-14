const LinkedList = require('./returnKthToLast').LinkedList
const kthToLast = require('./returnKthToLast').kthToLast


test('First node in a linked list', () => {
    const head = new LinkedList(1)
    head.next = new LinkedList(2)
    head.next.next = new LinkedList(3)

    expect(kthToLast(head, 1)).toBe(head.next.next)
})

test('Last node in a linked list', () => {
    const head = new LinkedList(1)
    head.next = new LinkedList(2)
    head.next.next = new LinkedList(3)

    expect(kthToLast(head, 2)).toBe(head.next)
})

test('k = 2', () => {
    const head = new LinkedList(1)
    head.next = new LinkedList(2)
    head.next.next = new LinkedList(3)

    expect(kthToLast(head, 2)).toBe(head.next)
})
