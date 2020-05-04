$(document).ready(() => {

    $(".nav-item").hide();

   $(".nav-icons").hover(function () { 
    $(this).children(".nav-item").toggle("slow");
   });

});