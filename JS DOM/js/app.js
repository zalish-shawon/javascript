// const allLiElement = document.getElementsByTagName('li');

// for (const li of allLiElement) {
//     console.log(li.innerText);
// }

// const allH1 = document.getElementsByTagName('h1'); 

// for (const h1 of allH1) {
//     console.log(h1);
// }
// for (const h1 of allH1) {
//     console.log(h1.innerText);
// }

// const container = document.querySelectorAll('.container ul');
// console.log(container);
// for (const con of container) {
//     console.log(con);
// }

// step 1 Where to add
const countryList = document.getElementById('country-list');
// step 2 What to be added
const li = document.createElement('li');
li.innerText = 'Norway';
// step 3 add the child
countryList.appendChild(li);

const mainContainer = document.getElementById('main-container');


const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = "Salad";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText  = "Biriyani";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = "Meet";
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);



