
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