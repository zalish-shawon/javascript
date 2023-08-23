

function doubleIt(num) {
    console.log(`num is ${num}`);
    return num * 2
}
const numbers = [1,6,7,8,55,45,11];
const result = numbers.map(doubleIt);
console.log(result);


const years = [1996,2006,1442,770];

const doubleYear = years.map(year => year * 2)
console.log(doubleYear);

const friends = ['Solim', 'Rahim', 'Karim', 'Romiz']

const allNames = friends.map(getName => getName.length)
console.log(allNames);

const firstLetter = friends.map(firstLetter => firstLetter[0])

console.log(firstLetter);