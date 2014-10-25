/* names v1 by @leo */

(function($) {
	
	$.fn.names = function(options) {
				
		var config = {
			'type': 0,
			'country': null,
			'gender': null,
			'complete': null
		}
				
		var count = this.length, placeholder = this;
				
		var api = 'http://api.uinames.com/?amount=' + count;
		var cached_config = JSON.parse( localStorage.getItem('names_info') );
				
		if (options) {
			$.extend(config, options);
		}
		        
		if( config.country || config.gender ) {
					
			$.each( config, function( index, value ) {
						
				if( value !== null && index !== 'complete' && index !== 'type' ) {
					api += '&' + index + '=' + value; 
				}
					    
			}); 
					
		}
		
		
		if( cached_config == null || cached_config.count != count || cached_config.country != config.country || cached_config.gender != config.gender ) {
		
			var check = false;
		
		} else {
			var check = true;
		}
		
		
		if(check == false) {
					
			$.ajax({
					
				dataType: "json",
				url: api,
				cache: false,
				complete: function( jqXHR, textStatus ) {
							
					var cache_info = {
						'count': count,
						'country': config.country,
						'gender': config.gender
					}
							
					localStorage.setItem( 'names_info', JSON.stringify( cache_info ) );
					localStorage.setItem( 'names_cache', jqXHR.responseText );
							
				}
					  
			});
			
		}
				
				
		var json = JSON.parse( localStorage.getItem( 'names_cache' ) );
		
		placeholder.each( function( index, value ) {
					
			var obj = json[index], type = config.type;
					
			var other_types = [
				'name', 'surname', 'gender', 'country'
			]
					
			var in_arr = $.inArray( type, other_types );
					
			if( in_arr != -1 ) { 
						
				var content = obj[type];
						
			} else {
						
				if( type != 0 && in_arr == -1 ) {
					console.log( 'uinames: false type set for "' + placeholder.selector + '"' );
				}
						
				var content = obj.name + ' ' + obj.surname;
						
			}
					
			$(this).html( content );
					
		});
				
				
		if( $.isFunction( config.complete ) ) {
			config.complete.call(this);
		}
	
		return this;
	    
	};
	
}( jQuery ));
