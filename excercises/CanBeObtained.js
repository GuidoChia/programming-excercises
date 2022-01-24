function solution(S, T) {

    if (T.length - S.length > 1)
        return "IMPOSSIBLE"

    if (T === S)
        return "NOTHING"

    if (S === T.substring(0, T.length - 1))
        return "ADD " + T[T.length - 1]

    if (T.length == S.length) {
        let canSwap = true
        let foundDifference = false
        let toSwapInT = undefined
        let toSwapInS = undefined

        let i = 0
        while (i < S.length && canSwap) {
            if (S[i] != T[i]) {
                if (!foundDifference) {
                    /* 
                        If it's the first difference found, save the characters and increment the counter
                    */
                    toSwapInT = S[i]
                    toSwapInS = T[i]
                    foundDifference = true
                } else if (S[i] == toSwapInS
                    && T[i] == toSwapInT
                    && S.substring(i + 1, S.length) == T.substring(i + 1, T.length)) {
                    /* 
                        If it's the second difference found, and the difference is the same that was found earlier
                        but interchanged, and the strings are equals from then, then we have to swap these characters. 
                    */
                    return "SWAP " + T[i] + " " + S[i]
                } else {
                    canSwap = false
                }
            }
            i++
        }
    }


    if (T.length == S.length - 1) {
        /* 
            Add a non valid character to the end of T, to make them of the same length, avoiding the check of edge cases (i>=T.length)
        */
        T = T.concat("0")
        let canJoin = true
        let i = 0
        while (i < (S.length - 1) && canJoin) {
            if (S[i] == T[i]) {
                if (S[i + 1] != T[i + 1]) {
                    /* 
                        If the current chars are equals, and the next ones are different, check if by merging the chars S[i] and S[i+1], the strings are equals
                        Note that T length has been increased by adding the non valid character, therefore we should check to T.lenght-1 for equality
                     */
                    if (S[i] == S[i + 1] && S.substring(i + 2, S.length) == T.substring(i + 1, T.length - 1)) {
                        return "JOIN " + S[i]
                    }
                    else canJoin = false
                }
            } else canJoin = false
            i++
        }
    }

    return "IMPOSSIBLE"
}
