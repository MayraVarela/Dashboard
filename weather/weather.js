
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
