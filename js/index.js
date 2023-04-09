/*DISLAZAMIENTO DEL SCROLL*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/*JS PARA EL FUNCIONAMIENTO DEL BOTON IR ARRIBA*/
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    }
    else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
}
document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*FUNCION QUE PERMITE CERRAR EL NAVBAR CUANDO ESTA EN TAMAÑO DE CELULAR

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})*/


$('.navbar-nav>li>a').on('click', function(){
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle);
    bsCollapse.toggle()
});
