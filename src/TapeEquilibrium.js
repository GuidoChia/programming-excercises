function solution(A) {
    /*
    Minimize the value |(A[0] + ... + A[P-1]) = (A[P] + ... + A[N-1])|.
    This solutions allows P=0, this means, one half of the partition is the A, and the other partition
    is an empty array, with a total sum of 0.
    :param A: non-empty list of integers
    :return: an integer - the index value where the smallest difference occurs
    */

    let leftValue = 0
    let rightValue = A.reduce((accumulator, a) => accumulator + a, 0)
    console.log(rightValue)
    let min = Math.abs(rightValue)
    let minIndex = 0

    A.forEach((element, index) => {
        leftValue += element
        rightValue -= element
        currentValue = Math.abs(leftValue - rightValue)
        if (currentValue < min) {
            min = currentValue
            minIndex = index
        }

    })

    return { min: min, minIndex: minIndex }
}

console.log(solution([3, 1, 2, 4, 3]))
console.log(solution([100, 2, 1, 4, 2, 104]))
console.log(solution([-1000, 1000]))