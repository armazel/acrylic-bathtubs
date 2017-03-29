$(document).ready(function(){
    $('.slick-banner-header').slick({
        dots:false,
        autoplay: true,
        touchMove:true,
        prevArrow:false,
        nextArrow:false,
        infinity:false,
        autoplaySpeed: 4000
});

    $('.slick-examples').slick({
        dots: false,
        infinite: false,
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
                    infinity:false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinity:false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinity:false
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


    $(window).on('scroll', function (e) {
        var surfacingBlock = $('.arrow-top'),
            windowScrolled = $(window).scrollTop();
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
        if (windowScrolled > ($(document).height() - $(window).height()) - $('.footer').innerHeight() && screen.width > 680) {
            surfacingBlock.addClass("position");
        } else {
            surfacingBlock.removeClass("position");
        }
    });
    $('.open-navbar').on('click',function () {
        $('.nav-menu.open').remove();
        $('.nav-menu').addClass('open')
    });
    $('.cross-nav').on('click',function (e) {
        $('.nav-menu').removeClass('open')
    });
    $('.nav-menu li').on('click',function (e) {
        $('.nav-menu').removeClass('open')
    })

});





