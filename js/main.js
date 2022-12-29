//intialization plugins
$(document).ready(function () {
    //animation icon toggler of navbar
    $(`.circle-menu`).click(function() {
        $(`.hamburger`).toggleClass(`is-active`);
        $(`.inner-menu`).toggleClass(`nav-active`);

    });
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    /*start the loading page */
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });
});
$(window).scroll(function() {
    if ($(document).scrollTop() > 5) {
        $(".side-nav").addClass("active");
    } else {
        $(".side-nav").removeClass("active");
    }
});
