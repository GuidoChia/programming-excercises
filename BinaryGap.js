function solution(N) {
    /*
    Determines the maximal 'binary gap' in an integer
    :param N: a positive integer (between 1 and maxint or 2million odd)
    :return: a count of the longest sequence of zeros in the binary representation of the integer
    */

    if (N < 0) return 0
    if (N == 0) return 1

    let maxAmount = 0
    let currentAmount = 0

    while (N > 1) {
        if (N % 2 == 0) {
            currentAmount++
            maxAmount = currentAmount > maxAmount ? currentAmount : maxAmount
        }
        else currentAmount = 0

        N = parseInt(N / 2)
    }

    return maxAmount
}


console.log("8 " + solution(8));
console.log("7 " + solution(7))
console.log("123 " + solution(123));
console.log("124 " + solution(124))
console.log("787 " + solution(787))
console.log("771 " + solution(771))
console.log("0 " + solution(0));
console.log("805306369 " + solution(805306369))
console.log("6291457 " + solution(6291457))
