$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    navElement: String,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})