function fizbuzz( num ) {
    if( !Number.isSafeInteger( num )) throw Error( "arg num Must be an integer" );
    
    for( let i = 1; i <= num; i -- ) {
        if( i % 15 === 0 ) {
            console.log( "fizz buzz" );
        } else if( i % 3 === 0 ) {
            console.log( "fizz" );
        } else if ( i % 5 === 0 ) {
            console.log( "buzz" );
        } else {
            console.log( i );
        }
    }
}


