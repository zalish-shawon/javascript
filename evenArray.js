function geteven(num) {
    let evenNum = []
    for(let item of num) {
        if (item % 2 == 0) {
        evenNum.push(item);
        } 
    }
    return evenNum;
}

console.log(geteven([12,36,99,101,4]));