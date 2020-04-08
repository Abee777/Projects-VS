$(document).ready(function() {
	// Set Options
	var speed = 500;				// fade speed
	var autoswitch = true;			// Auto slider options(true/false)
	var autoswitch_speed = 7000;	// Auto slider speed in ms

	// Add initial active class
	$('.slide').first().addClass('active');

	// Hide all slides
	$('.slide').hide();

	// Show first slide
	$('.active').show();

	// Next Handler
	$('#next').on('click', nextSlide);

	// Previous Handler
	$('#prev').on('click', previousSlide);

	// Auto slider Handler
	if(autoswitch === true){
		setInterval(nextSlide, autoswitch_speed)
	}

	// Switch to next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');			
		$('.slide').fadeOut(speed);		
		$('.active').fadeIn(speed);
	}

	// Switch to previous slide
	function previousSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});
