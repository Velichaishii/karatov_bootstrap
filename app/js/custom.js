$(document).ready(function() {
    var doc = $(document);

    $('.dropdown-toggle').dropdown()

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel();
    });

    $(".owl-carousel").owlCarousel({
        nav: true,
        dots: true,
        responsive : {
            320 : {
                items: 2
            },
            768 : {
                items: 5
            }
        }
    });

    doc.on('mouseenter', '[data-slide-toggle]', function (e) {
        if (doc.outerWidth() > 992) {
            var this_elem = $(this).data("slide-toggle"),
                this_slider = $(this).closest(".product-b__link-img");
            this_slider.find("[data-slide-toggle]").removeClass("active");
            $(this).addClass("active");
            this_slider.find("[data-slide]").removeClass("active");
            this_slider.find("[data-slide=" + this_elem + "]").addClass("active");
        }
        e.preventDefault();
    });

});