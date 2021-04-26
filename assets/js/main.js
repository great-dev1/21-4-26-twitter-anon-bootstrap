(function ($) {
	"use strict";

    jQuery(document).ready(function($){


    
        
        
        
        
  $('.toggle-bar').on('click', function () {
                $('.header-mainmenu, .off-canvas-overlay').addClass('active');
            })

            $('.cls-off-canvas-menu').on('click', function () {
                $('.header-mainmenu, .off-canvas-overlay').removeClass('active');
            })

            $('.off-canvas-overlay, .header-mainmenu ul li a, .close-icon').on('click', function () {
                $('.header-mainmenu, .off-canvas-overlay').removeClass('active');
            })



        
        
    $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 200) {
    $(".Sticky").removeClass("scroll-header");
   }else{
    $(".Sticky").addClass("scroll-header");
   }
  });
        
        
        

        
        
        
             // Menu Nav
        function smoothSctollTop() {
            $('.header-mainmenu ul li > a').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 124
                    }, 1000);
                }
            });
        }
        smoothSctollTop();
        
        
        $('.ingredients-area').scrolly({bgParallax:true});
        
        
        

       



    });


    jQuery(window).load(function(){


    });


}(jQuery));	