function make_avg(arr) {
   var sum = 0;
    for(i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

avg = make_avg([58,60,60]);
console.log(avg);


function sumofOddArray(arr) {
    let oddsum = 0;
    for (let i=0; i< arr.length; i++) {
        let element = arr[i]
        if(element % 2 != 0) {
            oddsum += element;
        }
    }
    return oddsum;
}

console.log(sumofOddArray([12,13,15,16]))


// function squareRoot(num) {
//     let result =  Math.sqrt(num);
//     return result;
//  }
 
//  console.log(squareRoot(16));

 
 function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
       let number = i;
       sum += number
    }
   return sum;
 }

 console.log(sumOfNumbers(10));