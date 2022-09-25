let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' );
let small = 'abcdefghijklmnopqrstuvwxyz'.split( '' );

function cipher( str, d ) {
    let msg = str.split( '' );
    let limit = capital.length - 1;
    let ciphered = msg.map( char => {
        if( capital.indexOf( char ) > -1 ) {
            let pos = d + capital.indexOf( char );
            if( pos <= limit ) {
                return capital[ pos ]
            } else {
                return capital[ pos - limit ]
            }
        }
        if( small.indexOf( char ) > -1 ) {
            let pos = d + small.indexOf( char );
            if( pos <= limit ) {
                return small[ pos ]
            } else {
                return small[ pos - limit ]
            }
        }
        return char
    })
    
    return ciphered.join( '' );

}

console.log( cipher( 'abcdeyz', 1 ) )