function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "please give me a number";
    } else {
        return Math.pow(number, 3); 
    }
}

console.log(cubeNumber(3));



function matchFinder(string1, string2) {
    if (typeof string1 && typeof string2 !== 'string') {
        return "please give me two string value";
    }
    else {
        let str = string1.includes(string2);
        return str;
    }
    
}

console.log(matchFinder("john doe", "ohn"));
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder("Peter Parker", "Pen"));
console.log(matchFinder("Peter Parker", "pet"));
// console.log(matchFinder("Md Zalish", "ish"));
// console.log(matchFinder("Md Zalish", 45));
// console.log(matchFinder(455, 45));



function sortMaker(arr) {
    let defaultVal = arr[0];
    let reverseArr = arr[0];

    if (arr[0] === arr[1]) {
        return "equal";
    } else if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid input";
    } else {
        for (let i =0; i < arr.length; i++) {
            if (arr[i] > defaultVal) {
               defaultVal = arr[i];
           } else if (arr[i] < defaultVal) {
               reverseArr = arr[i];
           }         
       }
       return [defaultVal,reverseArr];
    }
    
}

console.log(sortMaker([2,4]));
// console.log(sortMaker([4,2]));
console.log(sortMaker([1,2]));
console.log(sortMaker([1,1]));
console.log(sortMaker([4,-2]));






function findAddress(obj) {
    let properties = Object.keys(obj);
    for (let i =0; i < properties.length; i++) {
        if(properties[i] !== "street") {
            return "__";
        } else 
    }
}


let data = {
    street: 10,
    house:"15A", 
    society:"Earth Perfect",
}

console.log(findAddress(data));

// if (data.hasOwnProperty("society")) {
//     console.log(data.society);
//   } else {
//     console.log("__");
//   }

// for (let property in data) {
//     console.log(data[property]);
// }

// 