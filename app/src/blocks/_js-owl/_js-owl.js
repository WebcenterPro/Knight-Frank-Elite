$(document).ready(function(){
	$('.js-owl').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		nav: true,
		navText: ''
	});

	$(".owl-dots").wrap("<div class='container js-owl__dots'></div>");
});