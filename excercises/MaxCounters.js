/*
MaxCounters

*********
You are given N counters, initially set to 0, and you have two possible operations on them:
    * increase(X) - counter X is increased by 1
    * max counter - all counters are set to the maximum value of any counter
A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:
    * if A[K] = X, such that 1 <= X <=  N, then operation K is increase(X)
    * if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:
    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:
    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.
Write a function:
    def solution(N, A)
that, given an integer N and a non-empty zero-indexed array A consisting of M integers, returns a sequence of
integers representing the values of the counters.
The sequence should be returned as:
        a structure Results (in C), or
        a vector of integers (in C++), or
        a record Results (in Pascal), or
        an array of integers (in any other programming language).
For example, given:
    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.
Assume that:
        N and M are integers within the range [1..100,000];
        each element of array A is an integer within the range [1..N + 1].
Complexity:
        expected worst-case time complexity is O(N+M);
        expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for
        input arguments).
Elements of input arrays can be modified.
*/

function solution(N, A) {
    /*
    :param N: integer - the number of counters
    :param A: a sequence of integers specifying which counter to increase
    :return: the list of counters' values
    */

    let counters = new Array(N).fill(0);

    let maxCounter = 0
    let minCounter = 0

    A.forEach((element, index) => {
        if (element <= N) {
            counters[element - 1]++
            maxCounter = counters[element - 1] > maxCounter ? counters[element - 1] : maxCounter
        }
        else if (element === N + 1)
            counters.fill(maxCounter)

        console.log("counters " + counters)
        console.log("A[" + index + "]" + A[index])
    });

    return counters

}


console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]))
console.log(solution(2, [1, 2, 3, 1, 2]))
console.log(solution(2, [1, 1, 3, 2, 2]))
