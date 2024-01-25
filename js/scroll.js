var menu = document.querySelector('nav');

function activeScroll(){
    menu.classList.toggle('nav-ativo', scrollY > 2);
}
window.addEventListener('scroll', activeScroll);


window.sr = ScrollReveal({ reset: true }); 

sr.reveal('.topo-do-site', { duration: 2000 });

sr.reveal('.sobre', { duration: 4000 });

sr.reveal('.portifolio', { duration: 1000 });

sr.reveal('.formulario', { duration: 2000 });