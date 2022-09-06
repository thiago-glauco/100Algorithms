let output = [ 0, 1 ];
for( let i = 1; i <= 10; i++ ) {
    let lastNumber = output[ output.length - 1 ] + output[ output.length - 2 ];
    output.push( lastNumber )    
}

console.log( output.join( ',' ) );