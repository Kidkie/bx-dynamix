BX-Dynamix Version 1.0
August 30 2014

Hooks into built in gallery function in Wordpress and replaces it with a slideshow.
The slideshow is built with bxSlider (http://bxslider.com/) from Steven Wanderski.

 * Tested with Wordpress Version 3.9.2 and Twenty Fourteen Theme v1.0

==========

Background

This project was created to make it easier for users to produce slideshows on the fly in Wordpress.

* BX Dynamix was first inteded to be used with Bootstrap Carousel but later changed to bxSlider as it allows more options and feels steadier. If you still want to use it with Bootstrap Carousel, just modify the code to add carousel hooks instead (it works!).

Version 1.0

 * BX Dynamix v1 only works with one slideshow per page/post
 * Multiple slideshows are planned to be included in future versions
 * If you install BX Dynamix on your Wordpress site it will replace the gallery function with a slideshow. Ie. default gallery functionality will stop working.

How to handle Wordpress default gallery option

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
      

The demo

I've tried to add as much descriptions and explanations to the code as possible. Check it out.
