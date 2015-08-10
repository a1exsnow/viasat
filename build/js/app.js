$(document).ready(function() {
	    
	var width = $('.center').outerWidth();

	// dropdown

	$('.js-dropdown').css('width', width);

	$('.js-drop').hover(
		function() {
			$(this).find('.js-drop-link').addClass('is-open');
			$(this).find('.js-dropdown').slideDown();
		},
		function() {
			$(this).find('.js-drop-link').removeClass('is-open');
			$(this).find('.js-dropdown').slideUp();
		}
	);

	// slick 

	$('.js-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3
	});

	$('.js-channels').slick({
		dots: true,
		slidesToShow: 6,
		slidesToScroll: 6
	});
	$('.js-slick').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.js-recommends').slick({
		slidesToShow: 4,
		slidesToScroll: 1
	});
	$('.js-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	// select
	 $(document).click(function() {
        $(".js-select").removeClass("is-active");
	      $(".js-select-list").slideUp(100);
    });
    
  // select list
    $("body").on("click",".js-select",function(event) {
        event.stopPropagation();
    });
    $("body").on("click",".js-select-text",function(event) {
    	var select = $(this).parents(".js-select");
        if (select.hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
            select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
        }
       
    });

    $("body").on("click",".js-select-list li",function() {
        var val = $(this).attr("data-val");
        var text = $(this).text();
        var select = $(this).parents(".js-select");
        var selectList = $(this).parents(".js-select-list");
        select.find(".js-select-text").text(text);
        select.find("option").removeAttr("selected");
        select.find('option[value="'+val+'"]').attr("selected", "selected");
        selectList.find("li").removeClass("is-active");
        $(this).addClass("is-active");
        select.removeClass("is-active");
        selectList.slideUp(100);
        return false;
        
    });

    // popup init
    $('.js-popup-btn').on('click', function() {
    	var link = $(this).data('link');

    	$('[data-popup='+link+']').fadeIn();
    	$('body').addClass('no-scroll');
    });

    $('.overlay span').on('click', function() {
    	$(this).parent().fadeOut();
    });
    $('.js-popup-close').on('click', function() {
    	$(this).parents('.overlay').fadeOut();
    });

    // gallery

    $('.js-gallery').on('click', function() {
        var slideNumber = $(this).data('slide');

        $('.gallery-overlay').fadeIn();

        if ($('.gallery').hasClass('is-inited')) {
            $('.js-gallery-view').slick('slickGoTo', slideNumber);
            $('.js-gallery-thumbnail').slick('slickGoTo', slideNumber);
        }
        else {
            $('.js-gallery-view').slick({
                speed: 1000,
                infinite: false,
                initialSlide: slideNumber,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                asNavFor: '.js-gallery-thumbnail'
            });
            
            $('.js-gallery-view').on('afterChange', function(event, slick, currentSlide){
                $('.js-gallery-thumbnail').find('.slick-slide').removeClass('slick-current');
                $('.js-gallery-thumbnail').find('.slick-slide[data-slick-index='+currentSlide+']').addClass('slick-current');
            });

            $('.js-gallery-thumbnail').slick({
                slidesToShow: 8,
                slidesToScroll: 1,
                initialSlide: slideNumber,
                arrows: false,
                infinite: false,
                focusOnSelect: true,
                asNavFor: '.js-gallery-view'
            });
            $('.gallery').addClass('is-inited');
        }

        return false;
    });

    $('.js-gallery-close').on('click', function() {
        $(this).parent().fadeOut();
    });

});