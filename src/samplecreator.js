CKEDITOR.define( function() {
	'use strict';

	function create( editor ) {
		console.log( 'create a sample UI for', editor );
		editor.execute( 'example', 'foo' );
	}

	return {
		deps: [ 'example' ],

		// injected on load
		name: null,
		path: null,

		init: function( editor ) {
			editor.addCreator( 'sample', create );
		}
	};
} );
