(function ($) {
    "use strict";

    //preloader
    $(window).on('load', function () {
        $("#pre-load").delay(600).fadeOut(500);
        $(".pre-loader").delay(600).fadeOut(500);
    });

    //load header and footer
    $(".header").load("header.html"); 
    $(".footer").load("footer.html"); 

    //hamburger icon animation
    $('.hamburger').click(function () {
        $(this).toggleClass("active");
    });

    //header scroll animation
    var c, currentScrollTop = 0,
        navbar = $('header');

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

    var currentURL = window.location.href;

    //Floating manu for how we hire page
    $(document).ready(function () {
        let floatingMenu = $("#navbar-example3");
        let mainNavLinks = $("#navbar-example3 .navbar-nav .nav-link");
        let mainSections = $("div[data-bs-spy='scroll'] > div");
        
        $(window).scroll(function () {
            let fromTop = $(this).scrollTop();
        
            // Check if the scroll position is greater than 100px
            if (fromTop > 250) {
            floatingMenu.addClass("position-top");
            } else {
            floatingMenu.removeClass("position-top");
            }
        
            mainSections.each(function () {
                let section = $(this);
                let id = section.attr("id");
            
                if (
                    (section.offset().top - 100) <= fromTop &&
                    (section.offset().top - 100) + section.outerHeight() > fromTop
                ) {
                    mainNavLinks.removeClass("active");
                    $(`#navbar-example3 .navbar-nav .nav-link[href="#${id}"]`).addClass("active");
                    // alert(1);
                }
            });
        });
    });
      
    //Scroll content for how we hire page
    $(window).scroll(function() {
            var scrollDistance = $(window).scrollTop();

            // Show/hide menu on scroll
            //if (scrollDistance >= 850) {
            //		$('nav').fadeIn("fast");
            //} else {
            //		$('nav').fadeOut("fast");
            //}
        
            // Assign active class to nav links while scolling
            $('.section').each(function(i) {
                    if ($(this).position().top <= scrollDistance) {
                            $('.floating-menu a.active').removeClass('active');
                            $('.floating-menu a').eq(i).addClass('active');
                    }
            });
    }).scroll();      

    //text slider
    var currentIndex = 0;
    var slides = $('.slide');
    
    function showSlide(index) {
        slides.removeClass('active');
        slides.eq(index).addClass('active');
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    setInterval(nextSlide, 1000);

    //datepicker
    $('#datepicker, #start-month, #end-month').datepicker({
        uiLibrary: 'bootstrap5',
        format: 'dd/mm/yyyy',
        icons: {
            rightIcon: '<img src="img/calendar-icon.png" alt="Date Icon">'
        }
    });

    //profile switch
    $("#switch-id").change(function () {
        if ($(this).is(":checked")) {
            $("#my-application").show();
            $("#my-profile").hide();
            $("#application").removeClass("unchecked").addClass("checked");
            $("#profile").removeClass("checked").addClass("unchecked");
        } else {
            $("#my-application").hide();
            $("#my-profile").show();
            $("#application").removeClass("checked").addClass("unchecked");
            $("#profile").removeClass("unchecked").addClass("checked");
        }
    });

    //steper
    var currentStep = 1;
    var updateProgressBar;

    function displayStep(stepNumber) {
        if (stepNumber >= 1 && stepNumber <= 4) {
            $(".step-" + currentStep).hide();
            $(".step-" + stepNumber).show();
            currentStep = stepNumber;
            updateProgressBar();
        }
    }

    //Multi step wizard for candidate profile
    $(document).ready(function() {
        $('#multi-step-form').find('.step').slice(1).hide();

        $(".next-step").click(function() {
            if (currentStep < 4) {
            $(".step-" + currentStep).addClass("animate__animated animate__fadeOutLeft");
            currentStep++;
            setTimeout(function() {
                $(".step").removeClass("animate__animated animate__fadeOutLeft").hide();
                $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInRight");
                updateProgressBar();
            }, 500);
            }
        });

        $(".prev-step").click(function() {
            if (currentStep > 1) {
            $(".step-" + currentStep).addClass("animate__animated animate__fadeOutRight");
            currentStep--;
            setTimeout(function() {
                $(".step").removeClass("animate__animated animate__fadeOutRight").hide();
                $(".step-" + currentStep).show().addClass("animate__animated animate__fadeInLeft");
                updateProgressBar();
            }, 500);
            }
        });

        updateProgressBar = function() {
            var progressPercentage = ((currentStep - 1) / 3) * 100;
            $(".progress-bar").css("width", progressPercentage + "%");
        }
    });
      
    //slick slider
    $('.about-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
    });

    $('.hotjobs-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.galleria-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.testimonial-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.awards-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //Modal for language
    $(document).ready(function(){
        $('#language-pop').modal('show');
    });

    //Modal for campus tour
    $(document).ready(function () {
        // Set the video source and play when the modal is opened
        $('#campus-video-pop').on('show.bs.modal', function (e) {
            var videoSource = $(e.relatedTarget).data('src');
            $('#videoSource').attr('src', videoSource);
            $('#videoPlayer').get(0).load();
            $('#videoPlayer').get(0).play(); // Autoplay the video
        });
    
        // Pause the video when the modal is closed
        $('#campus-video-pop').on('hide.bs.modal', function () {
            $('#videoPlayer').get(0).pause();
        });
    });

    //aos animation
    AOS.init({
        duration: 1200,
        easing: 'ease-in-sine',
        delay: 100,
        disable: function() {
            var maxWidth = 576;
            return window.innerWidth < maxWidth;
        }
    });
    
    //wow animation
    new WOW().init();
    
})(jQuery);