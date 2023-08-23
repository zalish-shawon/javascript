const actor = {
    name: 'Ananta',
    age: 35,
    phone: '12444566',
    money: 456465464646,
}
const {name, phone} = actor
console.log(phone);
console.log(name);

const numbers = [45,55];
const [first, second] = numbers;
const [x,y] = [12, 54]
console.log(x);
console.log(first);

function doubleNum(a,b) {
    return [a*2, b*2]
}

const [prothom, ditiyo] = doubleNum(12,87);
console.log(prothom,ditiyo);