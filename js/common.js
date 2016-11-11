$(document).ready(function() {
    
    	// анимация сэндвича
	$(".select-buttons span").click(function () {
		$(".select-buttons span").removeClass("active");
		$(this).toggleClass("active");
	});
	
	
});