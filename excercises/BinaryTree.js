// (5, (3, (20, None, None), (21, None, None)), (10, (1, None, None), None))

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T) {
    return countVisibleNodes(T, 0)
}

function countVisibleNodes(T, currentMax) {
    if (T == null) {
        return 0
    }

    let V = T.x
    let leftTree = T.l
    let rightTree = T.r

    let currentVisible = 0

    if (V > currentMax) {
        currentVisible = 1
        currentMax = Math.max(currentMax, V)
    }

    return countVisibleNodes(leftTree, currentMax) + countVisibleNodes(rightTree, currentMax) + currentVisible
}