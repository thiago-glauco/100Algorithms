const _ = require( 'lodash' );

function absolutevaluesSum( arr ) {
    let isEven = arr.length % 2 === 0 ? true : false;
    return isEven ? arr[ arr.length / 2 - 1] : arr[ Math.floor( arr.length / 2 ) - 1]
}

console.log( absolutevaluesSum( [2, 4, 7, 6, 6, 8] ) );