//generador de contraseñas

const textContrasena = document.querySelector('#text-contrasena'); // Asumiendo que el elemento tiene el id "text-contrasena"
const input = document.querySelector('#range');
const cbUppercase = document.querySelector('#uppercase');
const cbLowercase = document.querySelector('#lowercase');
const cbNumber = document.querySelector('#number');
const cbSymbol = document.querySelector('#symbol');

function validarCampos() {
    let str = '';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const symbol = '!@#$%^&*()-_=+';

    if (
        cbUppercase.checked === false &&
        cbLowercase.checked === false &&
        cbNumber.checked === false &&
        cbSymbol.checked === false
    ) {
        alert('Debes seleccionar algunas reglas para generar la contraseña');
        return;
    }

    if (cbUppercase.checked) {
        str += uppercase; 
    }
    if (cbLowercase.checked) {
        str += lowercase;
    }
    if (cbNumber.checked) {
        str += number;
    }
    if (cbSymbol.checked) {
        str += symbol;
    }

    generarContrasena(str);
}

function generarContrasena(str) {
    let pass = '';
    for (let i = 1; i <= input.value; i++) {
        const char = Math.floor(Math.random() * str.length); // Usar paréntesis en lugar de corchetes
        pass += str.charAt(char);
    }

    textContrasena.value = pass;
}

const backgroundImageUrls = [
    'url("../assets/img/a1.jpg")',
    'url("../assets/img/a2.jpg")',
    'url("../assets/img/a3.jpg")',
    'url("../assets/img/a4.jpg")',
    'url("../assets/img/a5.jpg")',
    'url("../assets/img/a6.jpg")',
    'url("../assets/img/a7.jpg")',
    'url("../assets/img/a8.jpg")',
    'url("../assets/img/a9.jpg")',
    'url("../assets/img/a10.jpg")',
    'url("../assets/img/a11.jpg")',
    'url("../assets/img/a12.jpg")',
    'url("../assets/img/a13.jpg")',
    'url("../assets/img/a14.jpg")',
];

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
    document.body.style.backgroundImage = backgroundImageUrls[randomIndex];
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundPosition = 'center'; 
    document.body.style.backgroundRepeat = 'no-repeat'; 
}

document.addEventListener('DOMContentLoaded', function () {
    changeBackground();
    setInterval(changeBackground, 15000);
});