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
const formatSwitchBtn =document.querySelector(".format-switch-btn");
formatSwitchBtn.addEventListener("click", ()=> {
    formatSwitchBtn.classList.toggle("active")

    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12") {
        formatSwitchBtn.setAttribute("data-format", "24");
    }
    else{
        formatSwitchBtn.setAttribute("data-format", "12");
    }
});


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