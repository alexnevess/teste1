const hamburguer = document.getElementById('hamburguer');

function toggleMenu()
{
    const nav = document.getElementsByClassName('menu')[0];
    nav.classList.toggle('active');

}

hamburguer.addEventListener('click', toggleMenu)