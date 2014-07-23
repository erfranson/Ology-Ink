$(document).ready(function(){
	// nav on hover change colors//
	

	$('li.red, .log2, i').hover(function(){

		$(this).css('color', '#800000')
	}, function(){
		$(this).css('color','#000000')
	});

	$('li.white').hover(function(){
		$(this).css('color',"#800000")
	}, function(){
		$(this).css('color','#FFFFFF')
	});

	$('div.olo').hover(function(){
		$(this).css('opacity','0.8')
	}, function(){
		$(this).css('opacity','1')
	});

	$('div.olo').hover(function(){
		$('div.boxy',this).css('display','inline-block')
	}, function(){
		$('div.boxy',this).css('display','none')
	});

	



	


















	
});