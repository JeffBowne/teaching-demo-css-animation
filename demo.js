$(document).ready(function() {

	function highlightSelectedTrigger() {
		$(event.target).toggleClass('trigger--selected');
	}

	$('#trigger-tilt').click( function() {
		$('#cube').toggleClass('cube--tilt');
		highlightSelectedTrigger();
	});

	$('#trigger-spin').click( function() {
		$('#cube').toggleClass('cube--spin');
		highlightSelectedTrigger();
	});

	$('#trigger-slide-over').click( function() {
		$('#cube').toggleClass('cube--slide-over');
		highlightSelectedTrigger();
	});

	$('#trigger-slide-down').click( function() {
		$('#cube').toggleClass('cube--slide-down');
		highlightSelectedTrigger();
	});

	$('#trigger-ghost').click( function() {
		$('#cube').toggleClass('cube--ghost');
		highlightSelectedTrigger();
	});

	$('#trigger-heat').click( function() {
		$('#cube').toggleClass('cube--heat');
		highlightSelectedTrigger();
	});

	$('#trigger-round').click( function() {
		$('#cube').toggleClass('cube--round');
		highlightSelectedTrigger();
	});

	$('#trigger-shrink').click( function() {
		$('#cube').toggleClass('cube--shrink');
		highlightSelectedTrigger();
	});

	$('#trigger-tall').click( function() {
		$('#cube').toggleClass('cube--tall');
		highlightSelectedTrigger();
	});

	$('#trigger-wide').click( function() {
		$('#cube').toggleClass('cube--wide');
		highlightSelectedTrigger();
	});

	$('#trigger-grow').click( function() {
		$('#cube').toggleClass('cube--grow');
		highlightSelectedTrigger();
	});

	$('#trigger-compass').click( function() {
		$('#cube').toggleClass('cube--compass');
		highlightSelectedTrigger();
	});

	$('#trigger-cray').click( function() {
		$('#cube').toggleClass('cube--cray');
		highlightSelectedTrigger();
	});

});