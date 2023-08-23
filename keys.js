// practice task 

// const arrowFun = (num1, num2, num3) => {
//     const multiply = num1 * num2 * num3
//     return multiply;
// }

// console.log(arrowFun(45,78,23))

// console.log(`i am a web developer.
// i love to code.
// i love eat briyani.`)


// const arrowFun = (num1, num2=20) => {
//     const result = num1 * num2
//     return result;
// }

// console.log(arrowFun(12));

// const arrowFun = (arr) => {
//     let evenArray = [];
//     for(names of arr) {
//         if (names.length % 2 === 0) {
//             evenArray.push(names);
            
//         }
//     }
//     return evenArray;
// }

// console.log(arrowFun(['shagor', 'zalish', 'shima', 'shawonn' ]))

const arrowFun = (arr) => {

    for (item of arr) {
        // const sqr =  Math.pow(item, 2)
        //  console.log(sqr)
        item = item * item
        console.log(item);
    }
    
    
}

console.log(arrowFun([2,4,3,9]))

// const arrowFun = (arr1, arr2) => {
//     const newArr = [...arr1, ...arr2];
//     console.log(newArr);
//     const maxNum = Math.max(...newArr);
//     return maxNum;
// }

// console.log(arrowFun([12,36], [45,36]));