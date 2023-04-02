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
$('.nav-item a').click(function(){
    var $target = $('.navbar-collapse');
    if($target.removeClass('in')){
        $target.removeClass('in').height(0).css('overflow','hidden');
    }
});*/


/*FUNCIONAMINETO DEL FORMULARIO DE COTIZACIONES
$('#cotizaciones').submit(function (ev) {
    $.ajax({
        type: $('#cotizaciones').attr('method'), 
        url: $('#cotizaciones').attr('action'),
        data: $('#cotizaciones').serialize(),
        success: function (data){
            $("#cotizaciones")[0].reset();
            alertify.set('notifier','position', 'Mensaje enviado');
            alertify.success(alertify.get('notifier','position'));
        }
    });
    ev.preventDefault();
});*/