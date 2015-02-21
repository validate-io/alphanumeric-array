'use strict';

var isValid = require( './../lib' );

console.log( isValid( ['a1','b2','c3'] ) );
// returns true

console.log( isValid( ['a1',''] ) );
// returns false

console.log( isValid( [1,2,3] ) );
// returns false
