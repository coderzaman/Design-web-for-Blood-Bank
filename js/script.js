$(function () {

    var htmlbody = $('html, body');
    var href = $('.navbar a[href*="#"]:not([href="#');
    var btt = $('.back_to_top');
    btt.on('click', function (e) {
        htmlbody.animate({
            scrollTop: 0
        }, 2000);
        e.preventDefault();
    });
    $(window).on('scroll', function () {
        var self = $(this),
            height = self.height(),
            top = self.scrollTop();
        if (top > height) {
            if (!btt.is(':visible')) {
                btt.show();
            }
        } else {
            btt.hide();
        }
    });
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    //slick blog
    $('.slick_blog').slick({
        slidesToShow: 01,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.arrow_left',
        nextArrow: '.arrow_right'
    });
    $('.slick_blog_one').slick({
        slidesToShow: 01,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.arro_b_l_left',
        nextArrow: '.arro_b_l_right'
    });
    $('.slick_blog_three').slick({
        slidesToShow: 01,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.arrow_left_two',
        nextArrow: '.arrow_right_two'
    });
    $('.tweets_all').slick({
        slidesToShow: 01,
        arrows: true,
        dots: false,
        arrows: true,
        nextArrow: '.l_left',
        prevArrow: '.l_right',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 484,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false
                }
    }
            ]

    });

    /* Js For Team Area*/
    $('.team_silk').slick({
        slidesToShow: 3,
        dots: false,
        arrows: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '0',
        nextArrow: $('#left_arrow'),
        prevArrow: $('#right_arrow'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
            ]

    });
    //silk team
    //counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Banner Part js


    $('#slider-list1').freeSimpleSlider({
        dots: true,
        arrows: true,
        time: 3000,
        animation: "basic"
    });

    $('#slider-list2').freeSimpleSlider({
        dots: true,
        arrows: true,
        time: 6000,
        animation: "fade"
    });

    $('#slider-list3').freeSimpleSlider({
        dots: true,
        arrows: true,
        time: 5000,
        animation: "slide"
    });


    // center silk
    $('.venobox').venobox();
    //animation scroll js
    href.on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                htmlbody.animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
