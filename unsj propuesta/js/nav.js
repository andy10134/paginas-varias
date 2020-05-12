$(document).ready(() => {

    $(".hamburger").click(function (e) { 
        if ($(this).hasClass("is-active")) {

            $(this).removeClass('is-active');
        } else{
            $(this).addClass('is-active');
        }
        
    });
    
});