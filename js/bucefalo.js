/* Navbar Color */
$(window).scroll(function () {
    if ($("#menu").offset().top > 50) {
        $("#menu").addClass("bg-black-r");
    } else {
        $("#menu").removeClass("bg-black-r");
    }
});

/*Slider nosotros */
$('#recipeCarousel').carousel({
    interval: 3000
})

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 10;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
});