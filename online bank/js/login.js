document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const passField = document.getElementById('password')
    const email =  emailField.value;
    const pass =passField.value;
    // console.log(value);
    // console.log(passValue);
    if( email === 'admin@gmail.com' && pass === '123456') {
        // console.log('valid user');
        window.location.href = 'bank.html';
    } else {
        // console.log('invalid user')
        alert("Username or Password is Invalid")
    }
})