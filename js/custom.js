$(function() {
    'use strict'; // Start of use strict
   var $window = $(window);

	/*------------------------------------------------------------------
        Popup Youtube
    ------------------------------------------------------------------*/		

        $(".popup-youtube").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });	
    /*--------------------------
    scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
	
	$(".testimonial-slider").owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:4000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
		});	
		
	if ($('.partners-slider').length > 0) {
        $('.partners-slider').owlCarousel({
            loop: true,
            items: 5,
            autoplay: true,
            nav: false,
            dots: false,            
            margin: 30,
            navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items: 1,
                    center: false,
                    margin:0
                },
                600: {
                    items: 1,
                    center: false,
                    margin:0
                },
                768: {
                    items: 2,
                    center: false
                },
                992: {
                    items: 3
                    
                },
                1200: {
                    items: 5
                }
            }
        });
    }

	/*------------------------------------------------------------------
        Year
    ------------------------------------------------------------------*/
	$(function(){
    var theYear = new Date().getFullYear();
    $('#year').html(theYear);
	});

	/*------------------------------------------------------------------
        Menu On click
    ------------------------------------------------------------------*/	
    if ($("#sidemenu_toggle").length) {
       $("body").addClass("pushwrap");
       $("#sidemenu_toggle").on("click", function () {
          $(".pushwrap").toggleClass("active");
          $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
       }), $("#close_side_menu").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
       }), $("#btn_sideNavClose").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
       });
    }
   	
	/*------------------------------------------------------------------
        Smooth scroll
    ------------------------------------------------------------------*/	
   $("a.pagescroll").on("click", function (event) {
      event.preventDefault();
      $("html,body").animate({
         scrollTop: $(this.hash).offset().top
      }, 1200);
   });
    /*hide menu on mobile click*/
   $(".navbar-nav>li>a").on("click", function(){
    $(".navbar-collapse").collapse("hide");
   });
    /*MENU Fixed*/
   if ($("nav.navbar").hasClass("static-nav")) {
      $window.scroll(function () {
         var $scroll = $window.scrollTop();
         var $navbar = $(".static-nav");
         if ($scroll > 100) {
            $navbar.addClass("fixedmenu");
         } else {
            $navbar.removeClass("fixedmenu");
         }
      });
   }
});


/*------------------------------------------------------------------
 Loader 
------------------------------------------------------------------*/
jQuery(window).on("load scroll", function() {
    'use strict'; // Start of use strict
    // Loader 
     $('#dvLoading').fadeOut('slow', function () {
            $(this).remove();
        });
	
});
