$(document).ready(function(){
    $('.slick-banner-header').slick({
        dots:false,
        autoplay: true,
        touchMove:true,
        prevArrow:false,
        nextArrow:false,
        autoplaySpeed: 6000
});

    $("#arrow-info").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top-70}, 1500);
    });
});


