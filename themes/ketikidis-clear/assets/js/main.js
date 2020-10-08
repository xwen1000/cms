(function($) {
  
  "use strict";

/* 
	CounterUp
   ========================================================================== */
    $('.counter').counterUp({
      time: 500
    });


/* 
   Carousel Slider 
   ========================================================================== */
	var owl = $("#owlcarousel-area");
	owl.owlCarousel({
		animateOut: 'fadeOut',
		loop: true,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		items: 1,
		video:true,
		lazyLoad:true,
		navText : ["<i class='lnr lnr-chevron-left'></i>", "<i class='lnr lnr-chevron-right'></i>"],
		//margin:90,
		//stagePadding:90,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
	
	
/* 
   Carousel Clients 
   ========================================================================== */
	var owl = $("#clients-scroller");
	owl.owlCarousel({
		loop: false,
		nav: false,
		dots: false,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		items: 5,
		lazyLoad:true,
		//margin:90,
		//stagePadding:90,
		responsive: {
			0: {
				items: 2
			},
			480: {
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


/* 
   Touch Owl Carousel
   ========================================================================== */
	var owl = $(".touch-slider");
	owl.owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		items: 1,
		lazyLoad:true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});

	
/* 
   Post Gallery 
   ========================================================================== */
	$(".post-gallery").each(function(){
		$(this).owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			smartSpeed: 1200,
			items: 1,
			lazyLoad:true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				768: {
					items: 1
				},
				992: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		});
	});
	
	
/* 
   Post Gallery Items
   ========================================================================== */
	var owl = $("#post-gallery-items");
	owl.owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		items: 20,
		lazyLoad:true,
		responsive: {
			0: {
				items: 2
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});

	
/* 
   Post Gallery Item Magnific Popup
   ========================================================================== */
    $('.post-gallery-popup').magnificPopup({
		//delegate: '.owl-item:not(.cloned) a',
		delegate: 'a',
		type: 'image',
        mainClass: 'mfp-no-margins mfp-fade',
		tLoading: 'Loading image #%curr%...',
        removalDelay: 160,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1], // Will preload 0 - before current, and 1 after the current image
			titleSrc: 'title',
			tCounter: ''
		},
		zoom: {
			enabled: false,
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			verticalFit: true,
		},
    });
	
	
/* 
   Sidebar Gallery Magnific Popup
   ========================================================================== */
    $('.gallery-popup').magnificPopup({
		//delegate: '.owl-item:not(.cloned) a',
		delegate: 'a',
		type: 'image',
        mainClass: 'mfp-no-margins mfp-fade',
		tLoading: 'Loading image #%curr%...',
        removalDelay: 160,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1], // Will preload 0 - before current, and 1 after the current image
			titleSrc: 'title'
		},
		zoom: {
			enabled: false,
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			verticalFit: true,
		},
    });
	
	
/* 
   Magnific Portfolio Gallery
   ========================================================================== */
	$('.portfolio-gallery-popup').magnificPopup({
		delegate: '.portfolio-popup',
		type: 'image',
		mainClass: 'mfp-no-margins mfp-with-zoom',
		tLoading: 'Loading image #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1], // Will preload 0 - before current, and 1 after the current image
			titleSrc: 'title'
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		},
		/*iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					'<div class="mfp-title">Some caption</div>'+
					'</div>'
		},*/
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			/*titleSrc: function(item) {
			return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}*/
		},
		callbacks: {
			markupParse: function(template, values, item) {
				values.title = item.el.attr('title');
			},
			elementParse: function(item) {
			// the class name
				if(item.el.context.className == 'overlay portfolio-popup video-popup') {
					item.type = 'iframe';
				} else {
					item.type = 'image';
				}
			}
		},
	});

	
/* 
   Magnific Video Popup
   ========================================================================== */
$('.video-popup').magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false, 
});


/* 
   Next - Prev Posts
   ========================================================================== */
    var offset = 160;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.next-prev').fadeIn(600);
      } else {
        $('.next-prev').fadeOut(600);
      }
    });

	
/* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

	
/* 
   Page Loader
   ========================================================================== */
   $(window).on('load',function() {
      "use strict";
      $('#loader').fadeOut();
    });

	

	
	
	
	
}(jQuery));