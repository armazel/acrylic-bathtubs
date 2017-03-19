$(document).ready(function(){
    $('.slick-banner-header').slick({
        dots:false,
        autoplay: true,
        touchMove:true,
        prevArrow:false,
        nextArrow:false,
        autoplaySpeed: 6000
});

    $('.slick-examples').slick({
        touchMove:true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $("#arrow-info").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top-70}, 1500);
    });


});





