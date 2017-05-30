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

        // Default options.
        var settings = $.extend({
            // These are the defaults.
        }, options );

        // Search
		$(el).keyup(function() {
			var search = $(this);
			var value = $(this).val();
			var id_box = 'pcs-live-search-box';

			$('.search-results').remove();

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
		});
        
    };
 
}( jQuery ));


// Function select value
function pcsSelectValue(el, value) {
	$(el).val(value);

	$('.search-results').remove();
}