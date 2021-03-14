const rotateMatrix = require('./rotateMatrix')

test('Basic Matrix', () => {
    const matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    const rotatedMatrix = [
        [7,4,1],
        [8,5,2],
        [9,6,3]
    ]
    expect(rotateMatrix(matrix)).toBe(rotatedMatrix)
})