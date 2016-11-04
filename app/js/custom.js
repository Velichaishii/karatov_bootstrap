$(document).ready(function() {
    var doc = $(document);

    $('.dropdown-toggle').dropdown()

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel();
    });

    $(".owl-carousel_catalog").owlCarousel({
        nav: true,
        responsive : {
            320 : {
                items: 2,
                dots: true
            },
            768 : {
                items: 5,
                dots: false
            }
        }
    });

    $(".owl-carousel_reviews").owlCarousel({
        nav: true,
        responsive : {
            320 : {
                items: 1,
                dots: true
            },
            768 : {
                items: 2,
                dots: false
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