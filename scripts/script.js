function cargar(pagina){

    $.ajax({
        url:pagina,
        beforeSend: function(){
            
        },
        success: function(data){
                $("#main").html(data);
        }
    })
}


$(document).ready(function (){
    var altura=$('nav').offset().top;
    $(window).on('scroll', function(){
        if($(window).scrollTop() >altura){
            $('nav').addClass('shrink');
        }else{
            $('nav').removeClass('shrink');
            $('nav').addClass('top');
        }
    });

$('#quienes_somos').on('click', function(){
        var position=$('#main').offset().top;
        position=position-150;
        $('body, html').animate({
            scrollTop:(position)+'px',
        },1000);
        $('#quienes_somos').addClass('bottom');
        $('#licenciaturas').removeClass('bottom');
        $('#contacto').removeClass('bottom');
    });
    $('#licenciaturas').on('click', function(){
        var position=$('#main').offset().top;
        position=position-150;
        $('body, html').animate({
            scrollTop:(position)+'px',
        },1000);
        $('#licenciaturas').addClass('bottom');
        $('#contacto').removeClass('bottom');
        $('#quienes_somos').removeClass('bottom');
    });

    $('#contacto').on('click', function(){
        var position=$('#logo_pie').offset().top;
        $('body, html').animate({
            scrollTop:position+'px',
        },1000);
        $('#contacto').addClass('bottom');
        $('#quienes_somos').removeClass('bottom');
        $('#licenciaturas').removeClass('bottom');
        $('#galeria').removeClass('bottom');
    });

    $('#galeria').on('click', function(){
        var position=$('#main').offset().top;
        position=position-150;
        $('body, html').animate({
            scrollTop:position+'px',
        },1000);
        $('#galeria').addClass('bottom');
        $('#quienes_somos').removeClass('bottom');
        $('#licenciaturas').removeClass('bottom');
        $('#contacto').removeClass('bottom');
    });

 
 
 
});