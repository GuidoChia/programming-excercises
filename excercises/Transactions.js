function solution(A, D) {
    let monthPayments = new Array(12)
    let balance = 0

    /*
        For each transaction, add it to the balance.
        If it's a payment, add it to the amount of payments in that month, 
        and add the cost to the total cost of that month
    */
    A.forEach((element, index) => {
        balance += element
        if (element < 0) {
            const [year, month, day] = D[index].split("-")
            if (monthPayments[month - 1] == null) {
                monthPayments[month - 1] = { amount: 0, cost: 0 }
            }
            monthPayments[month - 1].amount++
            monthPayments[month - 1].cost += element
        }
    })

    let feeValue = 5
    let fees = 12 * feeValue

    /*
        For each month, check if it a fee should be charged or not
    */
    monthPayments.forEach(element => {
        if (element.amount > 2 && element.cost <= -100) {
            fees -= feeValue
        }
    })

    return balance - fees
}


console.log(solution([100, 100, -10, -20, -30], ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08']))