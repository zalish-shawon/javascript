function fibonacci(n) {
    const deafultVal = [0,1];
   

    for (let i = 2; i <= n; i++) {
        const nextNumber = deafultVal[i - 1] + deafultVal[i - 2]
        deafultVal.push(nextNumber);
    }
    return deafultVal;
}

console.log(fibonacci(12));