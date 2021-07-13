$(document).ready(function() {
    
    
    /* For changing background color on click. */
    $('.section-color-change p').click(function() {
        $(this).css('background-color', '#7df2f7');
    });
    
    /* For adding class on scrolling */
    $('.js--section-direction').waypoint(function(direction) {
        if(direction == "down"){
            $('.section-color-change h2').addClass("sticky");
        }else {
            $('.section-color-change h2').removeClass("sticky");
        }
    },  {
        offset: '60px;'                            
    });
    
    
    
    /* Smooth Scroll on button click */
    $('.js--scroll-button').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-four').offset().top}, 3000);
    });
    
    
    
    /* Smooth Scroll on button click -  using jQuery code snippet */
    // This will work for all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    
     /* For adding class on scrolling */
    $('.js--section-direction').waypoint(function(direction) {
        if(direction == "down"){
            $('.section-color-change h2').addClass("sticky");
        }else {
            $('.section-color-change h2').removeClass("sticky");
        }
    },  {
        offset: '60px;'                            
    });
    
    
    /* Animations on Scroll - Using waypoint*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        $('.js--wp-3').addClass('animate__animated animate__bounce').css('background-color', '#7df2f7');
    }, {
        offset: '100%;'
    });
    
    /* Navigation Animation */
    $('.js--nav-icon').click(function() {
        
        var nav = $('.js--right-nav');
        var icon = $('.js--nav-icon i');
        
        /* Toggle main nab bar */
        nav.slideToggle(500);
      
        /* Changing icons */
        if($(icon).text() == 'dehaze'){
           (icon).text('close');
        } else {
           (icon).text('dehaze');
        }
    });
    
    
    
    
    
});