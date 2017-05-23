/*
    @Author:        Pasquale Cappa Spina;
    @Website:       http://pasqualecappaspina.com;
    @Description:   Plugin live search for jQuery;
*/


// Plugin
(function ( $ ) {
 
    $.fn.pcsLiveSearch = function( options ) {
    	console.log('plugin');
    	var el = this;

        // Default options.
        var settings = $.extend({
            // These are the defaults.
        }, options );

        // Search
		$(el).keyup(function() {
			console.log('keyup');
			var search = $(this);
			var value = $(this).val();
			var id_box = 'pcs-live-search-box';

			$('.search-results').remove();

			var box = '<ul id="' + id_box + '" class="search-results">';

			$.post( settings.file, settings.values)
			  .done(function( data ) {
			  	console.log(data);
			  	var results = $.parseJSON(data);

			  	results.forEach(function(r, i) {
			  		if(r[settings.print] !== null) {
			  			box += '<li onclick="pcsSelectValue(' + el + ', \'' + r[settings.print] + '\')">' + r[settings.print] + '</li>';
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