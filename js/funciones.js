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
    
    $('#btn_before').on('click', function() { 
        $('#text_original').before('<p>Este parrafo se agregó antes</p>');       
    });

    $('#btn_after').on('click', function() { 
        $('#text_original').after('<p>Este parrafo se agregó después.</p>');       
    });
    $('#btn_append').on('click', function() { 
        $('#text_append').append('Este texto aparece con .append ');       
    });
    $('#btn_html').on('click', function() { 
        $('#text_html').html('Este texto aparece con .html');       
    });

    $('#btn_attr').on('click', function() { 
        var titulo = $("#text_attr").attr('title');
        alert(titulo);
    });

    $('#btn_val').on('click', function() {         
        $('#s1').text( $('#inputVal01').val() );
    });


});
