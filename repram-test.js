const assert = require( "assert" );
const repram = require( "./repram.js" );

assert.ok( repram( function( ){ return arguments; }, NUMBER, STRING )( "hello", 123, true ), "should not throw error" );

assert.equal( typeof repram( function( ){ return arguments; }, NUMBER, STRING )( "hello", 123, true ) == "object",
				true, "should be equal to 'object'" );

console.log( "ok" );
