var apiURL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=4030465282.9c9221c.5ec023d43352406e99fae4970892faf6'

var instagram = new Vue({
	el: '.instagram',
	data: {
		instagram: null,
	},
	mounted() {
		axios
			.get(apiURL)
			.then(response => (this.instagram = response.data.data))
	}
});

(function ($) {
	"use strict"; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

})(jQuery); // End of use strict
