/**
*
*	VALIDATE: alphanumeric-array
*
*
*	DESCRIPTION:
*		- Validates if a value is an alphanumeric array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isAlphaNumeric = require( 'validate.io-alphanumeric' );


// IS ALPHANUMERIC ARRAY //

/**
* FUNCTION: isAlphaNumericArray( value )
*	Validates if a value is an alphanumeric array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an alphanumeric array
*/
function isAlphaNumericArray( value ) {
	var len;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		if ( !isAlphaNumeric( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isAlphaNumericArray()


// EXPORTS //

module.exports = isAlphaNumericArray;
