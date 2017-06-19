const assert = require( "assert" );
const repram = require( "./repram.js" );

assert.ok( repram( function( ){ return arguments; }, NUMBER, STRING )( "hello", 123, true ) );

assert.equal( typeof repram( function( ){ return arguments; }, NUMBER, STRING )( "hello", 123, true ) == "object",
				true, "should return true" );

console.log( "ok" );
