
function duplicateItems(names) {
    const uniqueNames = [];
    for(let i = 0; i < names.length; i++) {
        const element = names[i];
        if(uniqueNames.includes(element) === false) {
            uniqueNames.push(element);
        }
    }
    return uniqueNames;
}
const names = ['abul', 'babul', 'kabul', 'sabul', 'nabul', 'abul', 'rabul', 'babul', 'sabul'];
// console.log(names.includes('babul'));
console.log(duplicateItems(names));
