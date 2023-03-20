$(function ($) {
    "use strict";

    jQuery(document).ready(function () {

    // Menu DropDown Start
    $('.nav-item.dropdown').on('mouseover', function(){
        $(this).find('.dropdown-menu').stop().show(0);
    });

    $('.nav-item.dropdown').on('mouseout', function(){
        $('.nav-item.dropdown > .dropdown-menu').stop().hide(0);
    });
    // Menu DropDown End

        $(function(){
            var w = window.innerWidth;
            var url = window.location.pathname,
                urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
            
            // now grab every link from the navigation
            $('.navbar-nav li a').each(function(){
                // and test its normalized href against the url pathname regexp
                if(urlRegExp.test(this.href.replace(/\/$/,''))){
                    $(this).addClass('active');
                }
            });

        });

    //   magnific popup activation
    $('.video-play-btn, .play-video').magnificPopup({
        type: 'video'
    });
    $('.img-popup').magnificPopup({
        type: 'image'
    });
    

    /*-----------------------------
        Accordion Active js
    -----------------------------*/
    $("#accordion, #accordion2").accordion({
        heightStyle: "content",
        collapsible: true,
        icons: {
        "header": "ui-icon-caret-1-e",
        "activeHeader": " ui-icon-caret-1-s"
        }
    });


    // Hero Area Slider
    var $hero_area_sliderlider = $('.hero-area-slider');
    $hero_area_sliderlider.owlCarousel({
        loop: true,
        navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });


    // service-slider
    var $service_slider = $('.service-slider');
    $service_slider.owlCarousel({
        loop: true,
        navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
        nav: true,
        dots: false,
        autoplay: false,
        margin: 30,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    // Aeatured Auction
    var $featured_auction_slider = $('.featured_auction_slider');
    $featured_auction_slider.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        autoplay: true,
        margin: 30,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            993: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });




    // Aeatured Auction
    var $latest_auction_slider = $('.latest_auction_slider');
    $latest_auction_slider.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        autoplay: true,
        margin: 30,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            993: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });


    /**------------------------
     *  gallery-slider Area Start
     * ---------------------**/
    var $gallery_slider = $('.gallery-slider');
    $gallery_slider.owlCarousel({
      loop: true,
      autoplay: false,
      autoPlayTimeout: 1000,
      margin: 30,
      dots: false,
      center: true,
      nav: true,
      navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
      responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
    });


        // Testimonial-slider Start
        var $testimonial_slider = $('.testimonial-slider');
        $testimonial_slider.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            margin: 30,
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
         // Testimonial-slider End
    // blog-slider
    var $blog_slider = $('.blog-slider');
    $blog_slider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: false,
        margin: 30,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

        /**------------------------------
     * Product Details  carousel
     * ---------------------------**/
    $('.one-item-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.all-item-slider',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                    horizontal: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.all-item-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.one-item-slider',
        arrows: true,
        prevArrow: '<i class="fa fa fa-chevron-left slidPrv4"></i>',
        nextArrow: '<i class="fa fa-chevron-right slidNext4"></i>',
        dots: false,
        centerMode: true,
        centerPadding: '10px',
        focusOnSelect: true
    });

   
});



    /*-- back to top --*/
    $(document).on('click', '.bottomtotop', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        var $window = $(window);
        if ($window.scrollTop( ) > 0 ) {
            $(".mainmenu-area").addClass('nav-fixed');
        } else {
            $(".mainmenu-area").removeClass('nav-fixed');
        }

        /*---------------------------
            back to top show / hide
        ---------------------------*/
        var st = $(this).scrollTop();
        var ScrollTop = $('.bottomtotop');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        lastScrollTop = st;

    });

    $(window).on('load', function () {
  
    /*---------------------
        Preloader
    -----------------------*/
    var preLoder = $("#preloader");
    preLoder.addClass('hide');
    var backtoTop = $('.back-to-top')
    /*-----------------------------
        back to top
    -----------------------------*/
    var backtoTop = $('.bottomtotop')
    backtoTop.fadeOut(100);
    });



});