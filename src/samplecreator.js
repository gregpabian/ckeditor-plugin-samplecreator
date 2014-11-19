CKE.define( [ 'mvc/plugin' ], function( Plugin ) {
	'use strict';

	return Plugin.extend( {
		deps: [ 'example' ],

		create: function() {
			console.log( 'create a sample UI for', this.editor );

			this.editor.execute( 'example', 'foo' );
		},

		init: function() {
			this.editor.addCreator( 'sample', this );
		}
	} );
} );
