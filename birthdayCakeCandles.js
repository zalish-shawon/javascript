function birthdayCakeCandles(candles) {
    let candle = Math.max(...candles);
    let sum = 0
    for (let i = 0; i < candles.length; i++) {
        if(candles[i] == candle) {
            sum ++;
        }
    }
    return sum;
}

console.log(birthdayCakeCandles([4,4,1,3]));



