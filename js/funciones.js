$(document).ready(function(){

    $('#vader').hide();
    $('#btn_hide').hide();

    $('#btn1').on('click', function() { 
        $('#p1').addClass('bg-danger');       
    });

    $('#btn_show').on('click', function() { 
        $('#vader').slideToggle(1000);
    });

    $('#btn3').on('click', function() { 
        $('#parrafos').append('<p>Este es un nuevo parrafo</p>');        
    });

    $('#btn_toogle').on('click', function() { 
        $('#titulo').toggle();       
    });

    $('#btn_slideup').on('click', function() { 
        $('#tituloSlide').slideUp();       
    });

    $('#btn_slidedown').on('click', function() { 
        $('#tituloSlide').slideDown();
    });

    
    $('#btn_fadein').on('click', function() { 
        $('#tituloFade').fadeIn(1000);       
    });

    $('#btn_fadeout').on('click', function() { 
        $('#tituloFade').fadeOut(1000);
    });
    
});