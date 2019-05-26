'use strict';

//slow scroll to anchor animation
$(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});

///scroll to top animation
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $('#button').addClass('show');
    } else {
        $('#button').removeClass('show');
    }
});

$('#button').on('click', function(e) {
    $('html, body').animate({scrollTop:0}, '3000');
});

$('#toggle').click(function () {
    $("#top-section").slideToggle("slow");

});