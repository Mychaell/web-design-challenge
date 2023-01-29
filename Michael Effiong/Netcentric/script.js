const fname = document.getElementById('fname');
const sname = document.getElementById('sname');
const age = document.getElementById('age');
const password = document.getElementById('passowrd');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let messages = []
     if (password.value.length < 10) {
        messages.push('Password must be longer than 10 characters')
    }
    if (password2.value.length !== password) {
        messages.push('this must match with password')
    }
    if (messages.length > 0) {



        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }


});


