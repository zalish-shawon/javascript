function largeNumber(num) {
    let firstNum = num[0];
    for(let i = 0; i < num.length; i++) {
        let element = num[i];
        if(element > firstNum) {
            firstNum = element; 
        }
    }
    return firstNum;
}

const number = [12,58,69,78,3,33,1,45,10,3035,113,996,785,1000,1250,2023];
console.log(largeNumber(number));