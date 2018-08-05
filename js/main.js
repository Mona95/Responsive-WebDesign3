$(document).ready(function () {
    'use strict';
    $('.slider').ripples({
        dropRadius: 12,
        pertureBance: 0.01,
    });


    $('.text').typed({
        strings: ["<strong>i love </strong><strong class='primary'> codings </strong>", "<strong>and to</strong><strong class='primary'> share </strong>"],
        typeSpeed: 100,
        loop: true
    });

    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 180) {
            $("nav").addClass('secondary');
        } else
        if ($("nav").hasClass('secondary')) {
            $("nav").removeClass('secondary');
        }
    });

    $(".works").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 250,
        loop: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            }
        }
    });
    
    $(".counter").counterUp({
        delay:50,
        time:5000
    });
    
    $("a").click(function (event) {

        event.preventDefault();
        
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });
    
    new WOW().init();
    
});
