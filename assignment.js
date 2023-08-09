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
    let firstVal = arr[0];
    let secondVal = arr[0];

    if (arr[0] === arr[1]) {
        return "equal";
    } else if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid input";
    } else {
        for (let i =0; i < arr.length; i++) {
            if (arr[i] > firstVal) {
               firstVal = arr[i];
           } else if (arr[i] < firstVal) {
               secondVal = arr[i];
           }         
       }
       return [firstVal,secondVal];
    }
    
}

console.log(sortMaker([2,4]));
// console.log(sortMaker([4,2]));
console.log(sortMaker([1,2]));
console.log(sortMaker([1,1]));
console.log(sortMaker([-4,-2]));






function findAddress(obj) {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    return street + "," + house + "," + society;
    
}

let data = {
    street: 10,
    house:"15A", 
    society:"Earth Perfect",
}

console.log(findAddress(data));




    