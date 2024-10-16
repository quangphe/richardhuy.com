var slider = tns({
    container: ".video_knrh_1_0_0__box",
    items: 4,
    slideBy: "page",
    autoplay: false,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    lazyloadSelector: ".tns-lazy",
    autoHeight: true,
    nav: false,
    navPosition: "bottom",
    controlsContainer: '#slider-nav',
    responsive: {
        430: {
            items: 1,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 4,
        }
    },
});