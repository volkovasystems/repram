const assert = require( "assert" );
const repram = require( "./repram.js" );

assert.ok( repram( function( ){ return arguments; }, NUMBER, STRING )( "hello", 123, true ) );

console.log( "ok" );
