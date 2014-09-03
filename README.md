#BX Dynamix Version 1.2 (BXD)
####Stockholm, September 3 2014

Hooks into built in gallery function in Wordpress and replaces it with a slideshow.
The slideshow is built with bxSlider (http://bxslider.com/) from Steven Wanderski.

 * Tested with Wordpress Version 3.9.2 and Twenty Fourteen Theme v1.0

See BX Dynamix in action here: http://www.martinekelund.com/bxdynamix/

==========

###Background

This project was created to make it easier for users to produce slideshows on the fly by using default functions in Wordpress.

* BXD was first intended to be used with Bootstrap Carousel but later changed to bxSlider as it allows more options and feels steadier. If you still want to use it with Bootstrap Carousel, just modify the code to add carousel hooks instead (it works!).

==========

##Version history

###Version 1.2

* Added support for multiple slideshows per page.

###Version 1.0

* BX Dynamix v1.0 only worked with one slideshow per page/post


==========

##FYI

* If you install BXD on your Wordpress site it will replace the gallery function with a slideshow. Ie. default gallery functionality will stop working.
* By default BXD adds the image as a background of every slide item as a default. This way of doing it removes the awesome responsivness of bxSlider. I decided to do this as I wanted the pictures to center in the viewport, both vertically and horizontally.
* (Updated) Ways of displaying slide content can be handled by commenting away code marked with Option 2. Option 1 adds the image as a img tag.

==========

###How to handle Wordpress default gallery option

As Wordpress only displays thumbnails in Gallery mode you have to add a filter to the functions.php. The code below replaces 'thumbnail' with 'medium' size images. You can manage default image sizes under Settings > Media in Wordpress Admin.

      function bx_dynamix_gallery_atts( $out, $pairs, $atts ) {
      
          $atts = shortcode_atts( array(
              "columns" => "2",
              "size" => "medium",
               ), $atts );
      
          $out["columns"] = $atts["columns"];
          $out["size"] = $atts["size"];
      
          return $out;
      
      }
      add_filter( "shortcode_atts_gallery", "bx_dynamix_gallery_atts", 10, 3 );
      

==========

##The demo

I've tried to add as much descriptions and explanations to the code as possible. Check it out.

 * Pictures in the demo was downloaded from freeimages.com.

Demo: http://www.martinekelund.com/bxdynamix/
