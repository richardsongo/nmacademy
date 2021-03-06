(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.slider').slider();
    $('.materialboxed').materialbox();
    $('.carousel.carousel-slider').carousel({fullWidth: true});

	$('.dropdown-button').dropdown({
	inDuration: 300,
	outDuration: 225,
	constrainWidth: false, // Does not change width of dropdown to that of the activator
	hover: true, // Activate on hover
	gutter: 0, // Spacing from edge
	belowOrigin: false, // Displays dropdown below the button
	alignment: 'left', // Displays dropdown with edge aligned to the left of button
	stopPropagation: false // Stops event propagation
	}
	);

  }); // end of document ready
})(jQuery); // end of jQuery name space
