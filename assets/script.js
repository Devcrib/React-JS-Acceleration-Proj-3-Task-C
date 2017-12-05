$(document).ready(function(){
	var drop_down = $('.coaches_drop');
	var drop_down2 = $('.client_drop');

	$('.second').mouseenter(function(){
	drop_down.fadeIn(100);
	});		

	$('.secondd').mouseenter(function(){
	drop_down2.fadeIn(100);
	});	
	
	$('.dropdown').mouseleave(function(){
	drop_down2.css({'display':'none'});
	drop_down.css({'display':'none'});;
	});	
});
