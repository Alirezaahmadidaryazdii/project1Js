
// submit and error in check
const submitButton = document.querySelector('#submit');
let showErrorEmail = document.querySelector('#error1');
let showErrorPassword = document.querySelector('#error2');

// modal
const modal = document.querySelector('.modal-parent')
const times = document.querySelector('.X');
// eyes in password
const eye = document.querySelector('#icon-eye');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let emailValue = document.querySelector('#email').value;
    let passwordValue = document.querySelector('#password').value;

    checkEmailPassword(emailValue, passwordValue);
});

function checkEmailPassword(email, password) {
    let checkedCorrect = [false, false];
    let emailPattern = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');

    if (email.length === 0) {
        showErrorEmail.innerHTML = "The email is empty, please write your email";
    } else if (!emailPattern.test(email)) {
        showErrorEmail.innerHTML = 'Email is not correct';
    } else {
        checkedCorrect[0] = true;
    }

    if (password.length === 0) {
        showErrorPassword.innerHTML = "The password is empty";
    } else {
        checkedCorrect[1] = true;
    }

    if (checkedCorrect[0] && checkedCorrect[1]) {
        showErrorEmail.innerHTML = '';
        showErrorPassword.innerHTML = '';
        modal.style.display = "block"
        let data = {
            email,
            password,
        }
        localStorage.setItem('dataSing', JSON.stringify(data));
    }else if(checkedCorrect[0])showErrorEmail.innerHTML = ''
    else if(checkedCorrect[1])showErrorPassword.innerHTML = ''
}

// modal times
times.addEventListener('click', ()=>{
    modal.style.display = 'none'
})

// eyes event
eye.addEventListener('click', ()=>{
    let passwordValue = document.querySelector('#password');
    if(eye.getAttribute('name') == 'bullseye' ){
        eye.setAttribute('name', 'low-vision')
        passwordValue.setAttribute('type', 'password')
    }else{
        eye.setAttribute('name', 'bullseye')
        passwordValue.setAttribute('type', 'text')
    }
})

