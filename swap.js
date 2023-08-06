// variable swap approach 1

let first = 25;
let second = 35;
console.log(first, second);
const temp = first;
first = second;
second = temp;

console.log(first, second);

// variable swap approach 2

let num1  = 45;
let num2 = 60;
console.log(num1, num2);

[num1, num2] = [num2, num1];

console.log(num1, num2);