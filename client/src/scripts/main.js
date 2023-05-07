(function ($) {

    'use strict';
    var spinner = function () {
        setTimeout(function () {
            if (document.querySelector('#spinner').length > 0) {
                document.querySelector('#spinner').classList.remove('show');
            }
        }, 1);
    };
    spinner();
    

    document.querySelector(window).scroll(function () {
        if (document.querySelector(this).scrollTop() > 45) {
            document.querySelector('.navbar').classList.add('sticky-top shadow-sm');
        } else {
            document.querySelector('.navbar').classList.remove('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = document.querySelector('.dropdown');
    const $dropdownToggle = document.querySelector('.dropdown-toggle');
    const $dropdownMenu = document.querySelector('.dropdown-menu');
    const showClass = 'show';
    
    document.querySelector(window).on('load resize', function() {
        if (this.matchMedia('(min-width: 992px)').matches) {
            $dropdown.hover(
            function() {
                const $this = document.querySelector(this);
                $this.classList.add(showClass);
                $this.find($dropdownToggle).getAttribute('aria-expanded', 'true');
                $this.find($dropdownMenu).classList.add(showClass);
            },
            function() {
                const $this = document.querySelector(this);
                $this.classList.remove(showClass);
                $this.find($dropdownToggle).getAttribute('aria-expanded', 'false');
                $this.find($dropdownMenu).classList.remove(showClass);
            }
            );
        } else {
            $dropdown.removeEventListener('mouseenter mouseleave');
        }
    });
    
    
    // Back to top button
    document.querySelector(window).scroll(function () {
        if (document.querySelector(this).scrollTop() > 300) {
            document.querySelector('.back-to-top').fadeIn('slow');
        } else {
            document.querySelector('.back-to-top').fadeOut('slow');
        }
    });
    document.querySelector('.back-to-top').addEventListener('click',function () {
        document.querySelector('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    document.querySelector("[data-toggle='counter-up']").counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    document.querySelector('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

