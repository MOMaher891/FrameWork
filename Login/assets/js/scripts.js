const PassInput = document.querySelector('.password');
var state = true;
const icon = document.querySelector('.show_password');

icon.addEventListener('click', () => {
    if (state) {
        PassInput.type = 'text';
        state = false;
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
    else {
        PassInput.type = 'password';
        state = true;
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
})