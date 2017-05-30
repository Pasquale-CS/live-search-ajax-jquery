/*
    @Author:        Pasquale Cappa Spina;
    @Website:       http://pasqualecappaspina.com;
    @Description:   Plugin live search for jQuery;
*/


// Plugin
(function ( $ ) {
 
    $.fn.pcsLiveSearch = function( options ) {
    	var el = this;

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
				  	console.log('1 - ' + data.items);

				  	//data.forEach(function(r, i) {
				  	$.each(data, function(i, r) {
				  		if(r[settings.print] !== null) {
				  			box += '<li onclick="pcsSelectValue(' + el + ', \'' + r[settings.print] + '\')">' + r[settings.print] + '</li>';
				  		}
				  	})
				
				.fail(function() {
				    console.log( "error" );
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