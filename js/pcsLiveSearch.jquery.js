/*
    @Author:        Pasquale Cappa Spina;
    @Website:       http://pasqualecappaspina.com;
    @Description:   Plugin live search for jQuery;
*/


// Plugin
(function ( $ ) {
 
    $.fn.pcsLiveSearch = function( options ) {
    	var el = this;
    	var selector = el.selector;
    	var timer = 0;

        // Default options.
        var settings = $.extend({
            // These are the defaults.
            timePause: 500,
            minChSearch: 2
        }, options );

        // Search
		$(el).keyup(function() {
			clearTimeout(timer);

			var search = $(this);
			var value = $(this).val();
			var id_box = 'pcs-live-search-box';

			$('.search-results').remove();

			if(value.length >= settings.minChSearch) {
				timer = setTimeout(function() {
					var box = '<ul id="' + id_box + '" class="search-results">';

					$.getJSON( settings.file, { search: value })
					  	.done(function( data ) {
						  	$.each(data, function(i, r) {
						  		if(r[settings.print] !== null) {
						  			box += '<li onclick="pcsSelectValue(\'' + selector + '\', \'' + r[settings.print] + '\')">' + r[settings.print] + '</li>';
						  		}
							});

						box += '</ul>';

						search.after(box);
					});
				}, settings.timePause);
			}
		});
    };
 
}( jQuery ));


// Function select value
function pcsSelectValue(el, value) {
	$(el).val(value);

	$('.search-results').remove();
}