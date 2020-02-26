$(document).ready(function(){
	var totalWidth = 0;
	var positions = [];
	$('#slides .slide').each(function(i){
		// Get slider widths
		positions[i] = totalWidth;
		totalWidth += $(this).width();
		// Check widths
		if (!$(this).width()) {
			alert ('Please add a width to your images');
			return false;
		}
	});

	// Set width
	$('#slides').width(totalWidth);

	// Menu item click handler
	$('#menu ul li a').click(function(e){
		// Remove active class and add inactive
		$('li.product').removeClass('active').addClass('inactive');
		// Add active class to parent
		$(this).parent().addClass('active');
		// Get the number of elements before your element within the same parent or container
		var pos = $(this).parent().prevAll('.product').length;
		//console.log(pos);
		$('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);
		// Prevent default 
		e.preventDefault();
 		// Stop autoscroll
		if (!autoScroll) clearInterval(itvl);
	});

	// Set first image active
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

	// Durration for auto-scroll
	var duration = 6;
	var itvl = setInterval(function(){autoScroll()}, duration*1000);

	// Auto Scroll
	var current = 1;
	function autoScroll(){
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click');
		current++;
	}
});