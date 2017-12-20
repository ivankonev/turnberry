jQuery(document).ready(function(){

	// --- COLLAPSE NAVBAR --- //
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
	
});

