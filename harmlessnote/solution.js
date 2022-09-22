function harmlessNote( note, source ) {

    let cleanNote = cleanText( note );
    let cleanSource = cleanText( source );

    cleanSource.forEach( word => {
        if( cleanNote.length === 0 ) return true;
        if( word === cleanNote[0] ) {
            cleanNote.shift( )
        }
    })

    if( cleanNote.length === 0 ){ 
        return true
    }

    return false;
    
}

function cleanText( text ) {
    return text.replace( /\.|\,/g, '' ).split(/\s+|\n|\r\n/).map( str => str.toLowerCase( ) ).sort( );
}

console.log( harmlessNote( `Então, um belo dia na inglaterra.`, `Um belo dia de verão, todos estavam felizes.
Então o crime aconteceu!`));