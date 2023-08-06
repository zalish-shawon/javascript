function secondLargeNumber(num) {
    let largeNum = num[0];
    let secondLarge = 0; // Initialize secondLarge with negative infinity
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        if (element > largeNum) {
            secondLarge = largeNum; // Store the previous largeNum as secondLarge
            largeNum = element;
        } else if (element > secondLarge && element < largeNum) {
            secondLarge = element;
        }
    }
    return secondLarge;
}

const number = [12, 58, 69, 78, 3, 33, 1, 45, 10, 3035, 113, 996, 785, 1000, 1250, 2023, 4450];
console.log(secondLargeNumber(number)); // Output should be 3035
