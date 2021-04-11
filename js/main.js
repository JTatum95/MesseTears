// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 72)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
    target: '#mainNav',
    offset: 75
});

// Collapse Navbar
var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-scrolled");
    } else {
        $("#mainNav").removeClass("navbar-scrolled");
    }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);


$(document).ready(function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 280) {
            $('#mainNav').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 281) {
            $('#mainNav').removeClass('navbar-fixed');
        }
    });
});