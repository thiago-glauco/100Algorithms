const _ = require( 'lodash' );
function commonCharCount( str1, str2 ) {
    let charsObj = createCharsObject( str1 );
    str2.split( '' ).forEach( c => {
        //console.log( c );
        charsObj[ c ] !== undefined ? charsObj[ c ] += 1 : 'nothing' ;
    })

    return Object.fromEntries ( Object.entries( charsObj ).filter( a => a[1] !== 0 ) );
}

function createCharsObject( str ) {
    let chars = {  };
    _.uniq( str ).forEach( char => {
        chars[char] = 0;
    })
    return chars;
}

console.log( commonCharCount( 'aaabbwwwyyyyiklj', 'abbbiy2' ) );