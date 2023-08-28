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


// const oddArr = [1,3,5,7,9]
// const evenArr =[]
// for (item of oddArr) {
//     item += 1;
//     evenArr.push(item)
    
// }
// console.log(evenArr);

// const oddArr = [1,3,5,7,9]

// const evenArr = oddArr.map((item) => item + 1);
// console.log(evenArr);

// const arr = [33,50,79,78,90,101,30];

// const getItems = arr.filter((item) => item % 10 === 0);
// console.log(getItems); 

// const getItemsByFind = arr.find((item)=> item % 10 === 0);
// console.log(getItemsByFind);


// const instructor = [
//     {name: 'Nodi', age: 28, position: 'Senior'},
//     {name: 'Akil', age: 26, position: 'Junior'},
//     {name: 'Shobuj', age: 30, position: 'Senior'},
// ]

// // console.log(instructor[0].position);

// const getSeniorName = instructor.filter((senior)=> senior.position === 'Senior')
// console.log(getSeniorName);

// const totalAge = instructor.reduce((sum, currentInstructor) => sum + currentInstructor.age, 0);
// console.log(totalAge);


let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}

console.log(data.Sophia.study[1].secondary[1]);


let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}

console.log(students['2222'].address.city);
console.log(students[3333].name);

const clr = ['red', 'blue', 'white']
const [x,y] = clr

console.log(x);
console.log(y);