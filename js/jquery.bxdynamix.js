/**!
 * BX Dynamix v1 - Make built in Wordpress a slideshow by hostile takeover.
 * https://github.com/Kidkie/bx-dynamix
 *
 * Copyright 2014, Martin Ekelund - http://www.martinekelund.com
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

jQuery(document).ready(function($){

	// Code to make a slideshow of Wordpress Gallery
	// function. This utilizes bxSlider as slideshow
	if ($('.gallery').length > 0) {
		var galleryId = $('.gallery').attr('id');
		var newGallery = "#"+galleryId;
		var pagerNum = $(galleryId+" li").length;

		// Check that extra tags added by Wordpress that mess up the slideshow is removed.

		$(newGallery).find('br').remove();

		// Please prepare the size of the images.

		var tn_array = Array();
		var numbers_array = Array();
		$('.gallery > dl').each(function() {
			size = $('img', this).attr('height');
			numbers_array.push( size );
		});
		var biggest = Math.max.apply( null, numbers_array );

		// Get the images, put them as backround and then remove the original.
		
		$('.gallery > dl').each(function() {
		    image = $('img', this).attr('src');
		    size = $('img', this).attr('height');
		    
		    // Pick up the tallest image and make the slideshow fit based on that #.
			$('.gallery-item').css('height',biggest)
		    
			// I want my images to center in case they're different height.
			// This code extracts the image and adds it as a background.

		    $(this).css('background-image', 'url(' + image + ')');
		    $(this).css('background-repeat', 'no-repeat');
		    $(this).css('background-position', 'center center');
		    $(this).find('dt').remove();
		});

		// Setup bxSlider option. Find more of there at http://bxslider.com.

		$(newGallery).bxSlider({
			mode: 'horizontal',
			captions: true,
			touchEnabled: true,
			autoHover: true,
			useCSS: false,

			// Code below uses bxSlider code the add a active class to 
			// current slide visivle in the viewport
			onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
				// Outout slide # to console for debugging.
			    //console.log(currentSlideHtmlObject);
			    $('.active-slide').removeClass('active-slide');
			    $(newGallery+'>dl').eq(currentSlideHtmlObject + 1).addClass('active-slide')
			},
			onSliderLoad: function () {
			    $(newGallery+'>dl').eq(1).addClass('active-slide')
			},

		});
	}

});
