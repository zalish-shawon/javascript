// function add() {
//     const count = 0
//      function count() {
//         count++
//     }
//     count()
// }

// add()

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  
  let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q);

function work(x, y = 4) {
  return x + y;
 }
 console.log(work(32))