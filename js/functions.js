// JavaScript Document


// Initialize all the functions for the index page
function load_index_functions() {
	
	// Initialize Parallax
	parallax_3d('discounts');
	parallax_3d('cash-back');
	parallax_3d('prizes');
	
	// Initialize slide ins
	slide_in_controller();
	
	// Initialize countdown timers
	countdown_timers();	
	// Do parallax calculations on scroll here
	// Do slide in calculations here as well
	$(window).scroll(function(){
		parallax_3d('discounts');
		parallax_3d('cash-back');
		parallax_3d('prizes');
		slide_in();
	});
}

// Moves the two background items in the parallax at relative speeds to create a 3d effect
function parallax_3d(id) {
	
	var viewport_height = parseInt($( window ).height());
	var scroll_top = parseInt($(window).scrollTop());
	var scroll_height = parseInt($('.experience-'+id).offset().top);
	var item_height = parseInt($('.experience-'+id).height());	
	var diamond_height = parseInt($('#experience-'+id+'-diamond').height());
	var icon_height =  parseInt($('#experience-'+id+'-icon').height());
	
	// Check if the item is visible, if so calculate parallax 
	if((scroll_top + viewport_height) > scroll_height && scroll_top < (item_height + scroll_height)) {
				
		// Get the ratio between the scroll position and viewport height
		var ratio = parseFloat((scroll_height - scroll_top) / viewport_height);
		
		// Create the new tops of each object
		var diamond_top = Math.floor(((diamond_height / 2) * (ratio * 0.8 ))+90);
		var icon_top = Math.floor(((diamond_height / 2) * (ratio * -0.55))+370);			
		
		// Apply new height based on the ratio		
		$('#experience-'+id+'-diamond').css('cssText', 'top: '+diamond_top+'px !important;');
		$('#experience-'+id+'-icon').css('cssText', 'top: '+icon_top+'px !important;');		
		
	}
}

function slide_in_controller() {
	
	// Get all slideins on the page
	var slide_ins = $('.slidein-box');
	
	$.each(slide_ins,function(key, slide_in) {
				
		// Set their opactity to 0
		$(slide_in).css('opacity','0.0');
		
	});
}


function slide_in() {
	
	// Get all slideins on the page
	var slide_ins = $('.slidein-box');
	
	var scroll_bottom = parseInt($(window).scrollTop()) +  parseInt($( window ).height());
		
	var duration = 1000;
	
	$.each(slide_ins,function(key, slide_in) {		
		
		// See if object can be slidden in
		// Object must be hidden and must be at least 100 pixels on screen in order to slide in
		if($(slide_in).css('opacity')==0 && $(slide_in).offset().top < (scroll_bottom - 100) && $(slide_in).offset().top > ($(window).scrollTop() - 100)) {
			
			var left = $(slide_in).position('left').left;			
				
			$(slide_in).css({left:(left + 1000)+'px', opacity: 1.0}).animate({left: '0px'}, {duration: duration, easing: 'easeOutBounce'}).hover(
		
			// Hover function
			function() {
			
				$(this).switchClass(' slidein-box-normal','slidein-box-hover', 300);
			
			// Unhover function	
			}, function() {
			
				$(this).switchClass('slidein-box-hover','slidein-box-normal', 300);				
				
		});		
		
			duration += 400;
		}
		
	});	
}

function countdown_timers() {
	
	// Start each timer thats on the page
	var timers = $('[class*=-time-left]');
	
	$.each(timers,function(key, timer) {
		setInterval(function() { countdown_time(timer); },1000);
		
	});
	
}

// Decrement timer by one second
function countdown_time(timer) {
	
		var time = $(timer).html();
		
		time = time.split(' : ');
		
		var hours = time[0].split(' ');
		hours = parseInt(hours[0]);
		
		var mins = time[1].split(' ');
		mins = parseInt(mins[0]);
		
		var secs = time[2].split(' ');
		secs = parseInt(secs[0]);
		
		secs--;
		
		if(secs < 0) { 
			secs = 59;
			mins--;
		}
		
		if(mins < 0 ) {
			mins = 59;
			hours--;
		}
		
		$(timer).html(hours+' hr : '+mins+' min : '+secs+' sec');
	
}