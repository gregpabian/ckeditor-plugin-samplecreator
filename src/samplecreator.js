CKE.define( [ 'mvc/plugin', 'plugins!example' ], function( Plugin, example ) {
	'use strict';

	return Plugin.extend( {
		create: function() {
			console.log( 'create a sample UI for', this.editor );

			this.editor.execute( 'example', 'foo' );

			example.moduleMethod();
		},

		init: function() {
			console.log( 'init sample creator' );
			this.editor.addCreator( 'sample', this );
		}
	} );
} );
