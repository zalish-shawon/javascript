var student = {
    id : 115,
    name : "Khan",
    class : "Nine",
    marks : 65,
}

console.log(student);
// change value for object 
student.class = "Ten";
console.log(student);
console.log(student.id);
console.log(Object.keys(student));

var keys = Object.keys(student);

for (i=0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = student[propertyName]
    console.log(propertyName, propertyValue);
}

// practice task about function 

// function foo() {
//     console.log("foo");
//     function bar() {
//         console.log('bar');
//     }
//     bar();
// }

// foo();

// function make_avg(num1, num2, num3) {
//     var total_avg = (num1 + num2 + num3) / 3 ;
//     return total_avg;

// }
// avg = make_avg(58,60,60);
// console.log(avg);





//  factorial numbers 




const car = {
    name: "BMW",
    model: "2x006",
    color: "Red",
    price: 5552,
}

// console.log(car);
const id = Object.keys(car);
console.log(id);

for (let i = 0; i < id.length; i++) {
    console.log(id[i]);
}




// string finding 
const p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?"
// console.log(p.replace('dog', 'monkey'));
// console.log(p.toLowerCase());
// console.log(p.includes('monkey'));
// console.log(p.includes('jumps'));

const parts = p.split(' ');
console.log(parts);
const sentence = p.split('.');
console.log(sentence);