// Method 1 Direct inline

{/* <button onclick="console.log('Hello!')">Click me</button>  */ }

// Method no 2
function makeYellow() {
    document.body.style.backgroundColor = 'Yellow';
}

// Method no 3 1st option

const makeBlueBtn = document.getElementById('blue-btn');
makeBlueBtn.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'Blue'
}

// Method no 3 2nd option

const makeWhiteBtn = document.getElementById('btn-white');
makeWhiteBtn.onclick = function makeWhite() {
    document.body.style.backgroundColor = 'White';
}

// Method 4 option 1

const makeBtnPurprle = document.getElementById('btn-purple');
makeBtnPurprle.addEventListener('click', makePurple);

function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// // Method 4 option 2

const makeBtnGrey = document.getElementById('btn-grey');
makeBtnGrey.addEventListener('click', function makeGrey() {
    document.body.style.backgroundColor = 'grey';
})