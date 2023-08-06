function fibonacci(n) {
    const series = [0,1];
   
    for (let i = 2; i <= n; i++) {
        const nextNumber = deafultVal[i - 1] + deafultVal[i - 2]
        deafultVal.push(nextNumber);
    }
    return series;
}

console.log(fibonacci(12));