
const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const valuesRegister = document.getElementById('valuesRegister');
const valuesLogin = document.getElementById('valuesLogin');

valuesRegister.style.display = 'block';
valuesLogin.style.display = 'none';

function setActiveButton(button) {
    registerButton.classList.remove('active');
    loginButton.classList.remove('active');
    button.classList.add('active');
}

registerButton.addEventListener('click', () => {
    valuesRegister.style.display = 'block';
    valuesLogin.style.display = 'none';
    setActiveButton(registerButton); // Set register button as active
});

loginButton.addEventListener('click', () => {
    valuesRegister.style.display = 'none';
    valuesLogin.style.display = 'block';
    setActiveButton(loginButton); // Set login button as active
});
