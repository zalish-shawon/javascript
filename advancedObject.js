const student = {
    name: "Sakib Khan",
    id: 121,
    address: "movie cinema",
    isSingle: true,
    friends: ['Apu', 'Raz', 'Salman', 'Amir'],
    car: {
        brand: 'Tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'Tesla',
            ceo: 'Elon Mask',
            origin: "USA",
        }
    },
    act: function() {
        return("Hello");
    }

}

console.log(student);
console.log(student.friends);
console.log(student.car);
console.log(student.act());

const items = {
    '0': 12,
    '1': 25,
    '2': 55,
}

console.log(items);
console.log(items[1]);



function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
}

add(121,45,56,434,565,33);