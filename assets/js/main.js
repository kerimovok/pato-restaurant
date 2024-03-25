$(document).ready(function () {
    // SLICK SLIDER
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

    $(".events-slider").slick({
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

    $(".reviews-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
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

    // COUNTDOWN
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }

    function initializeClock(id, endtime) {
        var daysSpan = $(".days");
        var hoursSpan = $(".hours");
        var minutesSpan = $(".minutes");
        var secondsSpan = $(".seconds");

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.html(t.days);
            hoursSpan.html(("0" + t.hours).slice(-2));
            minutesSpan.html(("0" + t.minutes).slice(-2));
            secondsSpan.html(("0" + t.seconds).slice(-2));

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(
        Date.parse(new Date()) + 25 * 24 * 60 * 60 * 1000 + 13 * 60 * 60 * 1000,
    );

    initializeClock("clockdiv", deadline);

    // HEADER
    // JQuery is something 💀
    var header = $("header");
    var logo = $(header).find("img");
    var logoWhite = $(logo).attr("src");
    var logoRed =
        "https://preview.colorlib.com/theme/pato/images/icons/logo2.png.webp";

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 5 && $(this).width() > 760) {
            $(logo).attr("src", logoRed);
            $(header).addClass("header-fixed");
        } else {
            $(logo).attr("src", logoWhite);
            $(header).removeClass("header-fixed");
        }
    });

    // Vanilla JS
    // var header = document.querySelector("header");
    // var logo = header.querySelector("img");
    // var logoWhite = logo.getAttribute("src");
    // var logoRed =
    //     "https://preview.colorlib.com/theme/pato/images/icons/logo2.png.webp";

    // window.addEventListener("scroll", function () {
    //     if (this.scrollTop > 5 && this.innerWidth > 760) {
    //         logo.setAttribute("src", logoRed);
    //         header.classList.add("header-fixed");
    //     } else {
    //         logo.setAttribute("src", logoWhite);
    //         header.classList.remove("header-fixed");
    //     }
    // });

    // VIDEO
    Fancybox.bind('[data-fancybox="video"]', {});
    Fancybox.bind('[data-fancybox="footer-gallery"]', {});
    Fancybox.bind('[data-fancybox="sidebar-gallery"]', {});

    // PARALLAX
    $(".parallax").parallax();
    // $(".parallax").parallax({
    //     imageSrc:
    //         "https://preview.colorlib.com/theme/pato/images/bg-intro-01.jpg.webp",
    //     speed: 0.3,
    //     bleed: 100,
    // });

    // SCROLL TO TOP
    var windowH = $(window).height() / 2;

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > windowH) {
            $("#scroll-up").css("opacity", "1");
        } else {
            $("#scroll-up").css("opacity", "0");
        }
    });

    // SIDEBAR
    // $("body").append('<div class="overlay-sidebar trans-0-4"></div>');
    var showSidebarBtn = $(".show-sidebar");
    var hideSidebarBtn = $(".hide-sidebar");
    var sidebar = $(".sidebar");
    var overlay = $(".overlay");

    $(showSidebarBtn).on("click", function () {
        $(sidebar).addClass("show-sidebar");
        $(overlay).addClass("show-overlay");
    });

    $(hideSidebarBtn).on("click", function () {
        $(sidebar).removeClass("show-sidebar");
        $(overlay).removeClass("show-overlay");
    });

    $(overlay).on("click", function () {
        $(sidebar).removeClass("show-sidebar");
        $(overlay).removeClass("show-overlay");
    });
});
