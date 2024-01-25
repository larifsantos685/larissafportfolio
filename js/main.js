document.addEventListener('DOMContentLoaded', function() {
    const btnAbrirMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const btnFecharMenu = document.querySelector('.btn-fechar');

    btnAbrirMenu.addEventListener('click', function() {
        menuMobile.classList.toggle('abrir-menu');
    });

    btnFecharMenu.addEventListener('click', function() {
        menuMobile.classList.remove('abrir-menu');
    });
    overlay.addEventListener('click', ()=>{
          menu.classList.remove('abrir-menu');
    })
});

