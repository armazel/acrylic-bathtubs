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
        dots:false,
        infinity:false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:'<div class="arrow-right"><i class="fa fa-chevron-right slick-next" aria-hidden="true"></i></div>',
        prevArrow:'<div class="arrow-left"><i class="fa fa-chevron-left slick-prev" aria-hidden="true"></i></div>',
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

    $(".arrow-info").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });


    jQuery(window).on('scroll', function (e) {
        var surfacingBlock = jQuery('.arrow-top'),
            windowScrolled = jQuery(window).scrollTop();
        if (windowScrolled > 0 && screen.width > 768) {
            surfacingBlock.addClass("open");
        }
        else {
            surfacingBlock.removeClass("open");
        }
        if (windowScrolled > 0) {
            surfacingBlock.addClass("open");
        }
        else {
            surfacingBlock.removeClass("open");
        }
        if (windowScrolled > (jQuery(document).height() - jQuery(window).height()) - jQuery('.footer').innerHeight() && screen.width > 680) {
            surfacingBlock.addClass("position");
        } else {
            surfacingBlock.removeClass("position");
        }
    });

});





