
function test1() {
    //calling that function with parameter
  setText('info1', "Md Zalish")
}
function test2() {
    //calling that function with parameter
   setText('info2', "Shawon")
}

// common function for reuse 
function setText(id, text) {
    document.getElementById(id).innerText = text;
}

