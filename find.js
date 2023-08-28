// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.find((element) => element.length > 6);
console.log(result);

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);