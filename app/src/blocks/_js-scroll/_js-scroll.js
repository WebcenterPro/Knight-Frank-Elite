$(function() {

	$.scrollify({
		section : ".js-scroll",
		sectionName: false,
		scrollSpeed: 700
	});

	if (window.innerWidth <= 425) {
		$.scrollify.disable();
	} else {
		$.scrollify.enable();
	}

	$(window).on('resize', function() {
		if (window.innerWidth <= 425) {
			$.scrollify.disable();
		} else {
			$.scrollify.enable();
		}
	});
});