$(document).ready(() => {

    $(".hamburger").click(function (e) { 
        if ($(this).hasClass("is-active")) {
            $(this).removeClass('is-active');
            $('.blur').css('filter', 'blur(0)');
        } else{
            $(this).addClass('is-active');
            $('.blur').css('filter', 'blur(1.5rem)');
        }
 
    });
    
});