// Owl Carousel

$('.owl-carousel').owlCarousel({
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
})
