// Accordian
var action = "click";
var speed = "500";

$(function (){
	// Question handler
	$('li.q').on(action, function(){
		// Get next element
		$(this).next().slideToggle(speed).siblings('li.a').slideUp(speed);
		// Get arrow for active question
		var img = $(this).children('img');
		// Remove the 'rotate' class except from the active
		$('img').not(img).removeClass('rotate');
		// Toggle rotate class
		img.toggleClass('rotate');
		// If we want arrow to show it was open (delete 3 last lines) and add:
		// var img = $(this).children('img').addClass('rotate');
	});
})
