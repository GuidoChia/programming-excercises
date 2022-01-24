function solution(S) {

    let lettersMap = new Map()

    let balloonLetters = "BALON"

    /*
        For each letter in S, check if it's one of the letters of Balloon, and count it.
    */
    for (var i = 0; i < S.length; i++) {
        if (balloonLetters.includes(S[i])) {
            let currentMapValue = lettersMap.get(S[i])
            if (currentMapValue == undefined) {
                lettersMap.set(S[i], 0)
                currentMapValue = 0
            }
            lettersMap.set(S[i], currentMapValue + 1)
        }
    }


    /*
        Beacause L and O are reapeated in the word Balloon, whe should divide by 2 their count.
     */
    let repeatedLetters = "LO"
    for (var i = 0; i < repeatedLetters.length; i++) {
        let currentRepeatedLetterValue = lettersMap.get(repeatedLetters[i])
        if (currentRepeatedLetterValue !== undefined)
            lettersMap.set(repeatedLetters[i], Math.floor(currentRepeatedLetterValue / 2))
    }

    let min = Number.MAX_SAFE_INTEGER

    /*
        Look for the letter of Balloon that is least repeated, as this will be our max amount of times.
    */
    for (var i = 0; i < balloonLetters.length; i++) {
        let currentLetterValue = lettersMap.get(balloonLetters[i])
        if (currentLetterValue !== undefined) {
            min = currentLetterValue < min ? currentLetterValue : min
        }
    }

    /*
        If no letter of Balloon has been found in S, the result is 0
    */
    if (min == Number.MAX_SAFE_INTEGER)
        min = 0

    return min
}