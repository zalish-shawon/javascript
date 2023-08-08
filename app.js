// // var myName;


// // // {=} this equal sign is an assignment operator

// // myName = 10;

// // var petName;
// // petName = myName;

// // var myFirstName = "Zalish";
// // var myLastName = "Mahmud";



// // var a = 5;
// // var b = 10;
// // var c = "I am a"

// // a = a + 1;
// // b = b + 5;
// // c = c + " String"

// // console.log(a);
// // console.log(b);
// // console.log(c);


// // var camper = "John";
// // var camper = "David";

// // let lastName = "The Cat";
// // lastName = "is very intelligent animal"
// // console.log(lastName);
// // console.log(camper);


// // const mynum = 25;

// // // mynum = 35;        // Error: Assignment to constant variable.

// // console.log(mynum);


// // const FCC = "cool";

// // let fact = "Hot day";
// // fact = "also cool day";

// // const num = 10 + 10;

// // console.log(num);

// // let sum = 10;

// // sum++;
// // sum = 25;
// // sum--;

// // console.log(sum);

// // const pi = 3.1416;

// // console.log(pi)

// // const product = 2.5 * 2;

// // console.log(product);


// // let myVar = 5;
// // myVar += 5;
// // console.log(myVar);

// // let myNum = 1;
// // myNum += 5;
// // console.log(myNum);


// // let count = 8;
// // count -= 3;
// // console.log(count);


// // let year = 2002;

// // year *= 4;
// // console.log(year);

// // const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// // console.log(myStr)

// // let myName = "My name is Shawon";
// // let fullName = "Zalish " + myName + " Mahmud";

// // console.log(fullName);

// // let lastNameLength = 0;
// // let lastName = "Love Bird";
// // lastNameLength = lastName.length

// // console.log(lastNameLength);


// // // let firstLetterOfLastName  = "";
// // let lastLetter = "Love Life";

// // let firstLetterOfLastName = lastLetter[0]; 

// // console.log(firstLetterOfLastName);



// // const firstName = "Lovelace";

// // // const lastName = firstName[firstName.length - 2];
// // const lastName = firstName.length

// // console.log(lastName);


// // const myNoun = "dog";
// // const myAdjective = "big";
// // const myVerb = "ran";
// // const myAdverb = "quickly";

// // // Only change code below this line
// // const wordBlanks = "The " + myNoun + " is " + myAdjective + " ddog " + myVerb + " fast and " + myAdverb ; // Change this line
// // // Only change code above this line

// // console.log(wordBlanks);

// // const names = ["Bob", "Milan", "John", "Kate", "Richard"]
// // const count = names[5]
// // console.log(names)


// // const arr = [
// //     [1,2,3],
// //     [4,5,6],
// //     [7,8,9], 
// //     [[10,11,12],13,14]
// // ];

// // console.log(arr);
// // const subarray = arr[3];
// // const nestedSubArray = arr[3][0]
// // const element = arr[3][0][1]
// // const numbs = arr[0][2]
// // const myData = arr[2][1]
// // console.log(nestedSubArray)
// // console.log(element)
// // console.log(numbs)
// // console.log(myData);

// // const arr1 = [1,2,3];
// // arr1.push(4);

// // const arr2 = ["Stimson", "J", "cat"];
// // arr2.push(["happy", "joy"]);
// // const neArr = arr2;
// // console.log(neArr)
// // const newArr = neArr[3][1];
// // console.log(newArr)


// // const myArray = [["John", 23], ["cat", 2]];
// // const removedFromArray = myArray.pop();
// // console.log(removedFromArray);

// // const arr3 = ["Stimson", "J", "cat", "rat"];
// // const firstElem = arr3.shift();
// // console.log(firstElem);

// // const ourArray = ["stimpson", "j", "cat"];
// // const Unshift =  ourArray.unshift("Happy");
// // console.log(ourArray);


// // const myList = [["Chocolate Bar", 15],["Peanut Bar", 25], ["Cookie", 35], ["Fruits", 50], ["Burger", 60]]

// // console.log(myList);

// // function reusableFunction() {
// //     console.log("Hi World");
// // }

// // reusableFunction();

// // function testFun(param1, param2){
// //     console.log(param1, param2)
// // }

// // testFun("Hello", "World");

// // function functionWithArgs(firstNum, secondNum) {
// //      return (firstNum + secondNum);
// // }

// // const result = functionWithArgs(56,23);
// // console.log(result);


// // function plusThree(num) {
// //     return num + 3
// // }

// // const answer = plusThree(2);
// // console.log(answer);


// // function timesFive(num){
// //     return num * 5;
// // }

// // const mul = timesFive(5);
// // console.log(mul);

// // // Global Scope
// // const myGlobal = 10;

// // function fun1() {
// //     oopsGlobal = 5
// // }

// // // Loacal Scope

// // function myTest(){
// //     const loc = "foo";
// //     console.log(loc);
// // }

// // myTest();
// // // console.log(loc) // error thrown, because this loc variable is declare locally means inside of function


// // const someVar = "Hat";

// // function myFunc(){
// //     const someVar = "Head";
// //     console.log( someVar);
// // }

// // myFunc()

// // function myOutFit(){
// //     const fit = "Fit";
// //     return fit;
// // }

// // const outerWear = "sweater"
// // myOutFit()

// // let sum = 0;

// // function addSum(num){
// //     sum = sum + num

// // }

// // addSum(3)

// // sum = 0;
// // function addFive(){
// //     sum = sum + 5
// // }

// // const five = addFive()
// // console.log(five)

// // let processed = 0;

// // function processedArg(num){
// //     return (num + 3)/ 5;
// // }

// // processed = processedArg(7);
// // console.log(processed);


// // function nextInLine(arr, item){
// //     arr.push(item);
// //     const rmv = arr.shift();
// //     return rmv;
// // }

// // const nw = nextInLine([2,45,66], 5);
// // console.log(nw);


// // function test (myCondition) {
// //     if (myCondition) {
// //         return "It was true";
// //     }
// //     return "It was false";
// // }

// // test(true);
// // test(false);


// // function equalityTest(myVal) {
// //     if (myVal === 10) {
// //         return true;
// //     }
// //     return false;
// // }

// // console.log(equalityTest(10))


// // function inEuality(myValue){
// //     if (myValue !== '25') {
// //         return "False"
// //     }
// //     else {
// //         return "True"
// //     } 
// // }

// // console.log(inEuality(25))

// // function compOpt(val) {
// //     if (val < 10) {
// //         return "less than 10"
// //     }
// //     if (val > 10) {
// //         return "greater than 10"
// //     }
// // }

// // console.log(compOpt(23))

// // function testLogicalAnd(val) {
// //     if (val > 5 && val < 10 ) {
// //         return "Yes"
// //     } return "NO"
// // }

// // console.log(testLogicalAnd(23))



// // const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// // function golfScore(par, strokes) {
// //   // Only change code below this line
// // if (strokes  == 1) {
// //   return names[0];
// // }else if (strokes <= par - 2) {
// //   return names[1];
// // } else if (strokes == par - 1 ) {
// //   return names[2];

// // } else if (strokes == par){
// //   return names[3]
// // }else if (strokes == par + 1) {
// //   return names[4]
// // } else if (strokes == par +2) {
// //   return names[5]
// // } else if (strokes >= par + 3){
// //   return names[6]
// // } else {

// //   return "Change Me";
// //   // Only change code above this line
// // }
// // }
// // console.log(golfScore(4, 3));


// // switch (fruit) {
// //   case "apple":
// //     console.log("The fruit is an apple");
// //     break;
// //   case "orange":
// //     console.log("The fruit is an orange");
// //     break;
// // }

// // function caseInSwitch(val) {
// //   let answer = "";
// //   switch (val) {
// //     case 1:
// //       answer = "alpha";
// //       break;
// //     case 2:
// //       answer = "beta";
// //       break;
// //     case 3:
// //       answer = "gamma";
// //       break;
// //     case 4:
// //       answer = "delta";
// //       break;

// //   }
// // }

// function chainToSwitch(val) {
//   let answer = "";
//   // Only change code below this line
// switch (val) {
//   case ("bob"): 
//     answer = "Marley";
//     break;
//    case (42) :
//     answer = "The Answer";
//     break;
//    case (1): 
//     answer = "There is no #1";
//     break;
//    case (99) :
//     answer = "Missed me by this much!";
//     break;
//    case (7) :
//     answer = "Ate Nine";
//     break;
    
// }

//   // Only change code above this line
//   console.log(
//     answer);
// }

// chainToSwitch(99);


// // function isLess(a, b) {
// //   if (a < b) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// function isLess(a, b) {
//   return a === b;
// }


// // const myDog = {
// //   "name": "Tommy",
// //   "legs": 4,
// //   "tails": 1,
// //   "friends": [4,6],
// // }

// // console.log(myDog.name);
// // console.log(myDog.friends);
// // console.log(myDog["tails"])

// const dog = {
//   Fido: "Mutt",
//   Hunter: "Doberman",
//   Snopie: "Beagle",
// };

// const myDog = "Hunter";
// const myBreed = dog[myDog];
// console.log(myBreed);


// const fox = {
//   name: "foxxy",
//   color: "red",
//   legs: 4,
// };

// const count = "color";
// const myCount = fox[count];
// console.log(myCount);


// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"],
// };
// ourDog.color = "Yellow";
// delete ourDog.color;
// console.log(ourDog);
// const updateName = ourDog.name = "Happy Camper";
// console.log(updateName);


// function phoneticLookup(val){
//   let result = "";
//   const lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Chicago",
//     "delta": "Denver",
//     "echo": "Easy",
//     "foxtrot": "Frank",
//   }
//   result = lookup[val];
//   return result;
// };

// console.log(phoneticLookup(
//   "alpha"
// ));


// function checkForProperty(object, property) {
//   return object.hasOwnProperty(property);
// }

// checkForProperty({top: "hat", bottom: "pants"}, 'top'); // true
// checkForProperty({top: "hat", bottom: "pants"}, 'middle'); // false



// const ourStorage = {
//   "desk": {
//     "drawer" : "stapler"
//   },
//   "cabinet": {
//     "top drawer": {
//       "folder1": "a file",
//       "folder2": "secrets" 
//     },
//     "bottom drawer": "Soda"
//   }
// };

// console.log(ourStorage.cabinet["top drawer"].folder1);

// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs",
//       "count": 4
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// console.log(myStorage.car["inside"]["glove box"]);
// console.log(myStorage.car.inside["passenger seat"]);



// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && value !== "") {
//     if (records[id].hasOwnProperty("tracks") === false) {
//       records[id][prop] = [];
//     }
//     records[id][prop].push(value);
//   }
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');


// // const ourArray = [];
// // let i = 5;

// // while (i >= 0 ) {
// //   ourArray.push(i);
// //   i--;
// // }
// // console.log(ourArray);

// // const myArray = [];

// // for (let i = 1; i < 5; i++) {
// //   myArray.push(i);
// // }

// // console.log(myArray);


// // const evenNum = [];

// // for (let i = 1; i < 10; i+=2) {
// //   evenNum.push(i);
// // }

// // console.log(evenNum);

// // Setup
// // const myArray = [];

// // // Only change code below this line
// // for (let i = 9; i > 0; i-=2) {
// //   myArray.push(i);
// // }

// // console.log(myArray);

// // const arr = [10,9,8,7,6];

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// // Setup
// // const myArr = [2, 3, 4, 5, 6];

// // let total = 0;
// // // Only change code below this line
// // for (let i = 0; i < myArr.length; i++) {
// //     total = total + myArr[i];
// //     console.log(total)
// // }

// // const arr = [
// //   [1, 2], [3, 4], [5, 6]
// // ];

// // for (let i = 0; i < arr.length; i++) {
// //   for(k = 0; k < arr[i].length; k++) {
  
// //     console.log(arr[i][k]);
// //   }
// // }


// // function multiplyAll(arr) {
// //   let product = 1;
// //   // Only change code below this line
// // for (let i = 0; i < arr.length; i++) {
// //   for (let j = 0; j < arr[i].length; j++) {
// //     product = product * arr[i][j]
// //   };
// // };
// //   // Only change code above this line
// //   return product;
// // };

// // // console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

// // const ourArray = []
// // let i = 0;

// // do {
// //   ourArray.push(i);
// //   i++
// // } while (i < 5);


// // function multiply(arr, n) {
// //   let product = 1;
// //   for (let i =0; i < n; i++) {
// //     product *= arr[i];
// //   }
// //   return product;
// // }

// // console.log(multiply([2,4,5,9,10], 5))


// // function sum(arr, n) {
// //   // Only change code below this line
// // if (n <= 0) {
// //       return 0;
// //     } else {
// //       return sum(arr, n - 1) + arr[n - 1];
// //     }
// //   // Only change code above this line
// // }

// // const contacts = [
// //   {
// //     firstName: "Akira",
// //     lastName: "Laine",
// //     number: "0543236543",
// //     likes: ["Pizza", "Coding", "Brownie Points"],
// //   },
// //   {
// //     firstName: "Harry",
// //     lastName: "Potter",
// //     number: "0994372684",
// //     likes: ["Hogwarts", "Magic", "Hagrid"],
// //   },
// //   {
// //     firstName: "Sherlock",
// //     lastName: "Holmes",
// //     number: "0487345643",
// //     likes: ["Intriguing Cases", "Violin"],
// //   },
// //   {
// //     firstName: "Kristian",
// //     lastName: "Vos",
// //     number: "unknown",
// //     likes: ["JavaScript", "Gaming", "Foxes"],
// //   },
// // ];

// // if (contacts[2].firstName == "Sherlock") {
// //   console.log("yes got it");
// // } else {
// //   console.log("oops!");
// // }


// function randomNum() {
//   let random = Math.floor(Math.random() * 10);
  
//   return random;
// }

// console.log(randomNum());

// function randomRange(max, min) {
//   let res = Math.floor(Math.random()  * (max - min + 1) + min);
//   return res;
// }

// console.log(randomRange(50, 30))


// function convertToInteger(str, radix) {
//   const parse = parseInt(str, radix);
//   return parse;
// }

// console.log(convertToInteger("111001", 2))

// function convertToInteger(str, radix) {
//   const parse = parseInt(str, radix);
//   return parse;
//  }
 
// console.log(convertToInteger("10011", 2));


// // ternary operator: a ? b : c

// function findgreater(a,b) {
//   return a > b ? "a is greater" : "b is greater or equal";
// }

// function checkEqual(b, a) {
//   return b <= a ? "Equal" : "Not Equal"
//  }
 
//  console.log(checkEqual(1, -1));


//  function findGreaterOrEqual(a,b) {
//   return (a===b) ? "a and b are equal" :
//   (a>b) ? "a is greater":
//   "b is greater"
//  }

//  function checkSign(num) {
//   return num > 0 ? "positive" : num === 0 ? "zero": "negative"
//  }

//  checkSign(10);


//  function countdown(n){
//   if (n < 1) {
//    return [];
//  } else {
//    const arr = countdown(n - 1);
//    arr.unshift(n);
//    return arr;
//  }
 
// }

// console.log(countdown(20));

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }

// console.log(rangeOfNumbers(12, 15));

// myScore = 85;
// tom = 66;
// jane = 95;
// peter = 56;
// john = 40;

// if (myScore > 80) {
//     console.log('Grade is A');
// }

// var fruits = ['Apple', 'Banana', 'Orange']

// var index = fruits.indexOf('Banana');
// console.log(index);
// fruits[1] = "Mango";
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.push('Watermelon');
// console.log(fruits);



// for(i = 1; i <= 39; i++ ) {
//     console.log("ajke amar mon valo nei " + i);
// }

// for(i=58; i<= 98; i++) {
//     console.log(i);
// }

// for (i = 581; i <= 623; i+=2) {
//     console.log(i);
// }

// var arr = ["html", "css", "tailwind", "bootstrap", "javascript"];

// for (i = 0; i < arr.length ; i++) {
//     console.log(arr[i]);
// }

// var mobileBrands = ["Nokia", "Motorola", "Samsung", "Huawei", "Apple"]
// var i = 0
// while (i < mobileBrands.length) {
//     console.log(mobileBrands[i]);
//     i++;
// }

// for(i = 30; i <= 86; i++) {
//     if(i > 44) {
//         break;
        
//     }console.log(i)
    
// }

// var booksName = [350, 220, 120, 180, 95, 450, 195]

// for(i=0; i < booksName.length; i++) {
//     if(booksName[i] > 200) {
//         continue;
        
//     }
//     console.log(booksName[i]);
    
// }

// var mothersMoney = 3000;
// var applePrice = 1000;
// var orangePrice = 700;

// var total = applePrice + orangePrice;
// console.log("total fruits price " + total + "tk" );
// var resumeAmount = mothersMoney - total;
// console.log("Fruit seller will return back " + resumeAmount + "tk");

// let a = 1;

// while (a <= 10) {
//     if(a % 2 == 0) {
//         console.log(a+ " is even")
//     } 
//     else {
//         console.log(a + " is odd");
//     }
// a+=1;
// }

// var numbers = [12, 14, 46, 45,88];
// console.log(numbers);
// // numbers.unshift(45);
// // console.log(numbers);

// console.log(numbers.slice(1,4));

// var singer = "Ariana Grande is singer";
// console.log(singer.substring(2,8));
// console.log(singer[8]);

// singer[4] = 'ddsdfd';

// console.log(singer);

// function 


function information(obj){
    // const sentence = obj.street+ "," + obj.house+ ","  + obj.society;
    if (!obj.street) {
        return ("__"+ "," + obj.house+ ","  + obj.society)
    } else if (!obj.house) {
        return (obj.street +"," +"__"+","+obj.society)
    } else if (!obj.society) {
        return (obj.street + "," + obj.house + "," + "__");
    } else {
      return  obj.street+ "," + obj.house+ ","  + obj.society;
    }
}


const data = {
    // street: 10,
    // house:"15A", 
    society:"Earth Perfect",
}
console.log(information(data));