;(function($){
    "use strict";
    
    /*----------------------------------------------------*/
    /*  Main slider js
    /*----------------------------------------------------*/
    function home_main_slider(){
        if ( $('.main_slider_inner').length ){
            $('.main_slider_inner').camera({
                height: '800px',
                loader: true,
                navigation: false,
                autoPlay:false,
                time: 4000,
                playPause: false,
                thumbnails: true,
                overlayer: true
            });
        }
    }
    home_main_slider();
    
    /*----------------------------
    Testimonial slider
    ------------------------------ */
    function testimonialSlider(){
        if ( $('.testimonial-slider').length){
            $('.testimonial-slider').owlCarousel({
                loop:true,
                margin:30,
                dotsSpeed: 2000,
                navSpeed: 2000,
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
                nav:false,
                items: 3,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplaySpeed:2000,
                smartSpeed: 2000,
                dots: true,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,                        
                        dots: true,
                        singleItem : true,
                        animateOut: 'slideOutLeft',
                        animateIn: 'backSlide',
                    },
                    470:{
                        items:2,
                        margin:20,
                    },
                    700:{
                        items:3
                    }
                }
            });
        }
    }
    testimonialSlider();
    
    /*----------------------------
    instragram Slider Owl Active
    ------------------------------ */
    function instragramSlider(){
        if ( $('.instragram-slider').length){
            $('.instragram-slider').owlCarousel({
                loop:true,
                margin:30,
                dotsSpeed: 2000,
                navSpeed: 2000,
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
                nav:false,
                items: 6,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplaySpeed:2000,
                smartSpeed: 2000,
                dots: false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:3,                        
                        margin:20,
                    },
                    599:{
                        items:6,
                        
                    }
                }
            });
        }
    }
    instragramSlider();
    
    /*---
    DatePicker
    ---*/
    function datepicker(){
        if ( $('.datepicker').length ){
            $('.datepicker').datepicker();
        }
    }
    datepicker();
     /*---
    img hover dir
    ---*/
    $(function() {	
        $('.img').each( function() { $(this).hoverdir(); } );

    });
    
    // preloader js
     $(window).load(function() { // makes sure the whole site is loaded
		$('.sampleContainer').fadeOut(); // will first fade out the loading animation
		$('.loader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(150).css({'overflow':'visible'})
    })
    //wow js
    new WOW().init();
})(jQuery)