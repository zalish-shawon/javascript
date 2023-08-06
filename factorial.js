function factorialNumber(num) {
    let factNum = 1;
    for(let i = 1; i <= num; i++) {
        let getNum = i;
        // console.log(getNum)
        factNum = factNum * getNum;
    }
    return factNum;
}

console.log(factorialNumber(7));

// reverse factorial 

function reverseFactorial(num) {
    let factNum = 1;
    for(let i = num; i >= 1; i--) {
        let getNum = i;
        factNum *= getNum;
    }
    return factNum;
}

console.log(reverseFactorial(7));


// factorial using while loop 

function factorial(number) {
    let i = 1;
    let result = 1;
    while (i <= number) {
        result *= i;
        i++;
    }
    return result;
}

console.log(factorial(8));