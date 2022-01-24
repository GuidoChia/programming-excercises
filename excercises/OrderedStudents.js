// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let start = 0;
    let end = A.length - 1;

    while (start != A.length - 1 && A[start] <= A[start + 1]) {
        start++
        console.log("entro")
    }

    if (start == A.length - 1) {
        return 0;
    }

    while (end != start + 1 && A[end] >= A[end - 1]) {
        end--
    }

    let currentMax = A[start];
    let currentMin = A[start];
    for (let i = start + 1; i <= end; i++) {
        if (A[i] < currentMin)
            currentMin = A[i];
        if (A[i] > currentMax)
            currentMax = A[i];
    }

    for (let i = 0; i < start; i++) {
        if (A[i] > currentMin) {
            start = i;
            break;
        }
    }

    for (let i = A.length - 1; i >= end + 1; i--) {
        if (A[i] < currentMax) {
            end = i;
            break;
        }
    }

    return end - start + 1;
}

/*console.log(solution([1, 2, 6, 5, 5, 8, 9]))
console.log(solution([1, 2, 6, 5, 10, 8, 9, 9]))
console.log(solution([1, 2, 5, 4, 8, 9]))
console.log(solution([4, 2, 1, 5, 5, 8, 9]))
console.log(solution([1, 2, 3, 5, 9, 8, 7]))
console.log(solution([1, 2, 3, 4, 5, 8, 9]))
console.log(solution([1]))*/
console.log(solution([]))