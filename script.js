//fecha y hora
function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    
    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if (formatValue === "12") {
        var period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        if (hours < 10) {
            hours = "0" + hours;
        }

        document.querySelector(".period").innerHTML = period;
    } else {
        if (hours < 10) {
            hours = "0" + hours;
        }

    document.querySelector(".period").innerHTML = "";
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

    function displayTime() {
        const today = new Date();
        const minutes = today.getMinutes();
        displayMessage(today.getHours(), minutes);
    }
    
    displayMessage(today.getHours(), minutes);
}

function displayMessage(hours, minutes) {
    const messageContainer = document.querySelector(".clock-format-text");
    const formattedHours12 = hours % 12 || 12;
    
    

    if (hours >= 1 && hours <= 7) {
        messageContainer.innerText = "Es hora de descansar. Apaga y sigue mañana";
    } else if (hours > 7 && hours <= 12) {
        messageContainer.innerText = "Buenos días, desayuna fuerte y a darle al código";
    } else if (hours > 12 && hours <= 14) {
        messageContainer.innerText = "Echa un rato más pero no olvides comer";
    } else if (hours > 14 && hours <= 16) {
        messageContainer.innerText = "Espero que hayas comido";
    } else if (hours > 16 && hours <= 18) {
        messageContainer.innerText = "Buenas tardes, el último empujón";
    } else if (hours > 18 && hours <= 22) {
        messageContainer.innerText = "Esto ya son horas extras, ... piensa en parar pronto";
    } else {
        messageContainer.innerText = "Buenas noches, es hora de pensar en parar y descansar";
    }
}


var updateClock = setInterval(clock, 1000);

var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", {weekday: "short"}).toUpperCase();
const monthName = today.toLocaleString("default", {month: "long"}).toUpperCase();

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;

const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotmenu = document.querySelector(".dot-menu");


//switch 24 hrs
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", (event) => {
    event.preventDefault();

    
    if (event.target.classList.contains("format-switch-btn")) {
        formatSwitchBtn.classList.toggle("active");

        var formatValue = formatSwitchBtn.getAttribute("data-format");

        if (formatValue === "12") {
            formatSwitchBtn.setAttribute("data-format", "24");
        } else {
            formatSwitchBtn.setAttribute("data-format", "12");
        }
    }
});

//generador de contraseñas

const textContrasena = document.querySelector('#text-contrasena');
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
        const char = Math.floor(Math.random() * str.length); 
        pass += str.charAt(char);
    }

    textContrasena.value = pass;
}

document.getElementById('btn-generate').addEventListener('click', function() {
    validarCampos();
    return false;
});

//Lista de enlaces

document.addEventListener('DOMContentLoaded', cargarLinks);

function agregarLink() {
    var titulo = document.getElementById('titulo').value;
    var enlace = document.getElementById('enlace').value;

    if (titulo.trim() === '' || enlace.trim() === '') {
        alert('Por favor, complete ambos campos.');
        return;
    }

    var link = {
        titulo: titulo,
        enlace: enlace
    };
    var listaLinks = JSON.parse(localStorage.getItem('listaLinks')) || [];
    listaLinks.push(link);

    
    localStorage.setItem('listaLinks', JSON.stringify(listaLinks));

    
    document.getElementById('titulo').value = '';
    document.getElementById('enlace').value = '';

    
    cargarLinks();
}

function cargarLinks() {
    var listaLinks = JSON.parse(localStorage.getItem('listaLinks')) || [];
    var listaElemento = document.getElementById('lista-links');

    
    listaElemento.innerHTML = '';

    
    listaLinks.forEach(function (link) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        var btnEliminar = document.createElement('button');

        a.textContent = link.titulo;
        a.href = link.enlace;

        btnEliminar.textContent = 'X';
        btnEliminar.classList.add('btn-eliminar');
        btnEliminar.onclick = function () {
            eliminarLink(link);
        };

        li.appendChild(a);
        li.appendChild(btnEliminar);
        listaElemento.appendChild(li);
    });
}

function eliminarLink(link) {
    var listaLinks = JSON.parse(localStorage.getItem('listaLinks')) || [];

    
    listaLinks = listaLinks.filter(function (item) {
        return JSON.stringify(item) !== JSON.stringify(link);
    });

    
    localStorage.setItem('listaLinks', JSON.stringify(listaLinks));

    
    cargarLinks();
    }

    //estacion meteorologica

    const apiKey = '2a885593498b4486958183323231612';
    const city = encodeURIComponent('Madrid'); 
    const baseUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;
    

    
    function fetchWeatherData() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                document.getElementById('location').innerText = `${data.location.name}, ${data.location.country}`;
                document.getElementById('condition').innerText = data.current.condition.text;
                document.getElementById('icon').src = data.current.condition.icon;
                document.getElementById('temperature').innerText = `${data.current.temp_c}°C`;
                document.getElementById('precipitation').innerText = `Precipitation: ${data.current.precip_mm} mm`;
                document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
                document.getElementById('wind').innerText = `Wind: ${data.current.wind_kph} km/h`;
    
                /*por hora*/
                const hourlyForecastContainer = document.getElementById('hourly-forecast');
                hourlyForecastContainer.innerHTML = '';
                if (data.forecast && data.forecast.forecastday && data.forecast.forecastday.length > 0) {
                    data.forecast.forecastday[0].hour.forEach(hour => {
                        const hourElement = document.createElement('div');
    
                        // Imagen
                        const iconImage = document.createElement('img');
                        iconImage.src = hour.condition.icon;
                        iconImage.alt = hour.condition.text;
                        hourElement.appendChild(iconImage);
    
                        // Temperatura
                        const temperatureElement = document.createElement('span');
                        temperatureElement.innerText = `${hour.temp_c}°C `;
                        hourElement.appendChild(temperatureElement);
    
                        // Hora
                        const timeElement = document.createElement('span');
                        const hourParts = hour.time.split(' '); 
                        const hourWithoutDate = hourParts[1]; 
                        timeElement.innerText = hourWithoutDate;
                        hourElement.appendChild(timeElement);
    
                        hourlyForecastContainer.appendChild(hourElement);
                    });
                } else {
                    console.error('El tiempo por hora no está disponible');
                }
    
                //slider
                activateHourlyForecastSlider();
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }
    
    function activateHourlyForecastSlider() {
       const hourlyForecastContainer = document.querySelector('.hourly-forecast-container');

        let isDragging = false;
        let startPosition = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
    
        hourlyForecastContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startPosition = e.clientX;
        });
    
        hourlyForecastContainer.addEventListener('mouseup', () => {
            isDragging = false;
            snapSlide();
        });
    
        hourlyForecastContainer.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const currentPosition = e.clientX;
                const distance = currentPosition - startPosition;
                currentTranslate = prevTranslate + distance;
    
                updateSliderPosition();
            }
        });
    
        function updateSliderPosition() {
            hourlyForecastContainer.style.transform = `translateX(${currentTranslate}px)`;
        }
    
        function snapSlide() {
            const slideWidth = hourlyForecastContainer.querySelector('.hourly-forecast').offsetWidth;
            const slides = Array.from(hourlyForecastContainer.children);
    
            
            const newIndex = Math.round(currentTranslate / slideWidth);
            const boundIndex = Math.max(0, Math.min(newIndex, slides.length - 1));
    
            currentTranslate = boundIndex * -slideWidth;
    
            updateSliderPosition();
    
          
            prevTranslate = currentTranslate;
        }
    }
    
    document.addEventListener('DOMContentLoaded', function () {
        fetchWeatherData();
        activateHourlyForecastSlider();
        setInterval(fetchWeatherData, 600000);
        
    });
    
    //fondo

    const backgroundImageUrls = [
        'url("assets/img/a1.jpg")',
        'url("assets/img/a2.jpg")',
        'url("assets/img/a3.jpg")',
        'url("assets/img/a4.jpg")',
        'url("assets/img/a5.jpg")',
        'url("assets/img/a6.jpg")',
        'url("assets/img/a7.jpg")',
        'url("assets/img/a8.jpg")',
        'url("assets/img/a9.jpg")',
        'url("assets/img/a10.jpg")',
        'url("assets/img/a11.jpg")',
        'url("assets/img/a12.jpg")',
        'url("assets/img/a13.jpg")',
        'url("assets/img/a14.jpg")',
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
    });s