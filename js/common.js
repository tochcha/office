$(document).ready(function() {
document.createElement('header');
document.createElement('nav');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('footer');
document.createElement('figure');
document.createElement('figcaption');
document.createElement('main');
    
    
    	// анимация сэндвича
	$(".select-buttons span").click(function () {
		$(this).toggleClass("active");
	});
	
	// слайдер
	$('.main-slider').slick({
		infinite: true,
		dots: true,
		fade: true,
		arrows: false,
		pauseOnFocus: false,
		speed: 1000,
		autoplay: true,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				fade: false
			  }
			}
		]
	});
	
	
});