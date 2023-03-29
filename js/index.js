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