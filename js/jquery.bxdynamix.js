/**!
 * BX Dynamix v1.2 - Make built in Wordpress a slideshow by hostile takeover.
 * https://github.com/Kidkie/bx-dynamix
 *
 * Copyright 2014, Martin Ekelund - http://www.martinekelund.com
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

jQuery(document).ready(function($){
	// Code to make a slideshow of Wordpress Gallery
	// function. This utilizes bxSlider as slideshow.
	if ($('.gallery').length > 0) {
		$( ".gallery" ).each(function( index ) {

			var galleryId = $(this).attr('id');
			var galleryNew = "#"+galleryId;
			var pagerNum = $(galleryId+" li").length;

			// Check that extra tags added by Wordpress who mess up the slideshow is removed.
			$(galleryNew).find('br').remove();

			// Please prepare the size of the images.
			var size_array = Array();
			$(this).find('dl').each(function() {
				size = $('img', this).attr('height');
				size_array.push( size );
			});
			var biggest = Math.max.apply( null, size_array );

			// Get the images, put them as backround and then remove the original.
			$(this).find('dl').each(function() {
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

			// Setup bxSlider options. Find more at http://bxslider.com.
			$(galleryNew).bxSlider({
				mode: 'horizontal',
				captions: true,
				touchEnabled: true,
				autoHover: true,
				useCSS: false,

				// Code below uses bxSlider code the add a active class to 
				// current slide visivle in the viewport
				onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
					// Outout slide # to console for debugging.
				    // console.log(currentSlideHtmlObject);
				    $('.active-slide').removeClass('active-slide');
				    $(galleryNew).find('dl').eq(currentSlideHtmlObject + 1).addClass('active-slide');
				},
				onSliderLoad: function () {
				    $(galleryNew).find('dl').eq(1).addClass('active-slide');
				},
			});
		});
	}

});
