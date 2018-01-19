jQuery(document).ready(function(){

	// --- NAVBAR --- //
	(function navbarCollapse() {	
		var nbButton = jQuery('button.navbar-toggle');
		var nbCollapse = jQuery('div.navbar-collapse');
		nbButton.on('click', function(e) {
			e.preventDefault();
			nbCollapse.slideToggle(250);
		});
		jQuery(window).resize(function() { 
			if ( jQuery(window).width() > 768 ) {
				nbCollapse.removeAttr('style');
			}
		});
	})();
	
	// --- TOGGLE --- //
	(function toggleText() {
		var toggle = jQuery('a.readmore');
		toggle.on('click', function(e) {
			e.preventDefault();
			var toggle = jQuery(this);
			var toggleText = toggle.text() == "Read More" ? "Show Less" : "Read More";
			toggle.text(toggleText);
		});
	})();

	// --- PARALLAX --- //
	(function parallaxBackground() {
  
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if ( (!isMobile) && ($('.parallax').length) ) {

      var parallaxContainer = $(".parallax-container"),
          parallaxImg = $(".parallax-img");

        $(window).on('load resize scroll',function(e) {

          var windowHeight = $(window).height(),
          scroll = $(window).scrollTop();
          function parallax(parallaxContainer, parallaxImg, speed) {

            var offsetTop = parallaxContainer.offset().top,
            height = parallaxContainer.height();
            parallaxImg.filter(function() {
            return offsetTop < ( scroll + windowHeight ) && ( offsetTop + height ) > scroll;
          }).css( 'transform', 'translate3d( 0px, ' + parseInt( ( scroll - offsetTop ) * speed ) + 'px, 0px )' );

        }
          
        parallax( parallaxContainer, parallaxImg, 0.2 );
          
      });
    }
  })();
});

