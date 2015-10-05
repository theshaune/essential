/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

        $('.post-image').addClass('animate-in');
        $('body').addClass('ani-complete');
        

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);



$(document).ready(function() {

  $('.site-navigation-burger, .site-navigation-burger span, .site-menu-wrap, .site-menu-wrap-inner').on('click', function(e){
    if(e.target != this) return;
    e.preventDefault();
    $('.site-menu').toggleClass('js-show');
    $('.site-navigation-burger').toggleClass('js-active');
  });
});

$(document).ready(function() {
    $('.show-comments').on('click', function(e){

        e.preventDefault();

          var disqus_shortname = 'theme-place'; // Replace this value with *your* username.

          // ajax request to load the disqus javascript
          $.ajax({
                  type: "GET",
                  url: "http://" + disqus_shortname + ".disqus.com/embed.js",
                  dataType: "script",
                  cache: true
          });
          // hide the button once comments load
          $(this).fadeOut();
    });
});

$(document).ready(function() {

  var logo = {
    init: function(){
      window.addEventListener('scroll', _.throttle( logo.fade , 60 ));
      logo.fade();
    },
    fade: function(){
      var $logo = $('#logo');
      var pageHeaderHeight = $('.page-header').height();
      var opacity =  (( pageHeaderHeight )-($("body").scrollTop() * 1.35 ) ) /  (pageHeaderHeight) * 1 ;
      if (opacity < -0.15 ){
        $logo.addClass("js-hide");
        $logo.css("opacity", 0);
      }else {
        $logo.removeClass("js-hide");
        $logo.css("opacity", opacity);
      }
    }
  }
  if ($('#logo')) {
    logo.init();
  };
});
