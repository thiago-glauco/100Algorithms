let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' );
let small = 'abcdefghijklmnopqrstuvwxyz'.split( '' );

function cipher( str, d ) {
    d = d % 26;
    console.log( d );
    let limit = d > 0 ?  capital.length - 1 : 0
    let msg = str.split( '' );
   
    return msg.map( char => {
        if( capital.indexOf( char ) > -1 ) {
            let pos = d + capital.indexOf( char );
            if( pos < 0 ) return capital[pos + capital.length ]
            if( pos > capital.length - 1 )  return capital[ pos - capital.length ]
            return capital[ pos ];
        }
        if( small.indexOf( char ) > -1 ) {
            let pos = d + small.indexOf( char );
            console.log( pos );
            if( pos < 0 ) return small[pos + small.length ]
            if( pos > small.length - 1 )  return small[ pos - small.length ]
            return small[ pos ]
        }
        return char
    }).join( '' );

}

console.log( cipher( '!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U', 62 ) )