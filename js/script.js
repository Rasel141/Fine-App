// Owl Carousel screenshot

$('.section-screenshot__carousel').owlCarousel({
    items: 4,
    loop:true,
    autoplay:true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,

        },
        480:{
            items:2,
            nav:false,

        },
        768:{
            items:4,
            nav:false,
            loop:false,
  
        }
    }
});

// Owl Carousel  Clients
$('.section-clients__list').owlCarousel({
    items: 1,
    loop:true,
    autoplay:true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,

        },
        480:{
            items:1,
            nav:false,

        },
        768:{
            items:1,
            nav:false,
            loop:false,
  
        }
    }
});


/*=================================================
                    NAVIGATION
===================================================*/
// show/hide transparent black navigation
$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("header-nav");
            
            $("#back-to-top").fadeOut();
        } else {
            // show nav
            $("nav").addClass("header-nav");
            $("#back-to-top").fadeIn();
        }
    });

});

// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

});


// Wow js

// main wow script
 new WOW().init();

//  repeat animation
/*
window.addEventListener('scroll', function(e) {
    if( $(window).scrollTop() <= 50) {
        $('.wow').removeClass('animated');
        $('.wow').removeAttr('style');
        new WOW().init();
    }
});
*/
