// SLICK SLIDER
$(document).ready(function () {
    $(".hero-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        dotsClass: "slider-dots",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        prevArrow:
            '<button class="arrow-slider prev-slider"><i class="fas fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:
            '<button class="arrow-slider next-slider"><i class="fas fa-angle-right" aria-hidden="true"></i></button>',
    });
});
