// JavaScript Document


// Initialize all the functions for the index page
function load_index_functions() {
	
	// Initialize Parallax
	parallax_3d('discounts');
	parallax_3d('cash-back');
	parallax_3d('prizes');
	
	// Do parallax calculations on scroll here
	$(window).scroll(function(){
		parallax_3d('discounts');
		parallax_3d('cash-back');
		parallax_3d('prizes');
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

function slide_out_controller() {
	
}

function slide_out(id) {
	
}