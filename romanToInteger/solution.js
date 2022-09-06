const add = require( '../add/solution' );

const romanTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

//console.log( romanTable.I );
console.log( romanToInteger( 'III') );
console.log( romanToInteger( 'LVIII') );
console.log( romanToInteger( 'MCMXCIV') );

function romanToInteger( roman ) {
    let str = roman.split( '' );
    //console.log( str );
    let intArr = [];
    for( let i = 0; i < str.length; i++ ) {
        if( hasNextElement( str, i ) ) {
            //console.log( romanTable[ str[i] ] );
            intArr.push( ( romanTable[ str[i] ] * sign( str, i ) ) );
        } else {
            //console.log( romanTable[ str[i] ] );
            intArr.push( romanTable[ str[i] ] )
        }
    }
    
    return add( ...intArr );
    //console.log( intArr );
}

function hasNextElement( str, i ) {
    return i < ( str.length - 1 ) ? true : false;
}

function sign( str, i ) {
    /**
     * I can be placed before V (5) and X (10) to make 4 and 9. 
        X can be placed before L (50) and C (100) to make 40 and 90. 
        C can be placed before D (500) and M (1000) to make 400 and 900.
     */

    switch ( str[ i ] ) {
        case( 'I' ):
            if( str[ i + 1] === 'V' || str[ i + 1] === 'X' ) return -1;
        case( 'X' ):
            if( str[ i + 1] === 'L' || str[ i + 1] === 'C' ) return -1;
        case( 'C' ):
            if( str[ i + 1] === 'D' || str[ i + 1] === 'M' ) return -1;
        default:
            return 1
    }
}