/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isValid = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-alphanumeric-array', function tests() {

	it( 'should export a function', function test() {
		expect( isValid ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isValid( ['a1','b2','c3'] );
		assert.ok( bool );

		bool = isValid( [new String('a1') ] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'',
			null,
			undefined,
			true,
			function(){},
			[],
			{},
			[1,2,3],
			[1,'2',3],
			['a1','']
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isValid( value );
		}
	});

});
