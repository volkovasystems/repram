
const repram = require( "./repram.js" );

console.log( repram( function( ){ return arguments; }, NUMBER, STRING )( "hello", 123, true ) );
