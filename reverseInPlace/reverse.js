let a = 'abcdefghijklmnopqrstuvxz'.split('');
let b = [];
for(let i = 0; i < 9; i++) {b.push(i)}

function reverseInPlace( array ) {
    let limit = array.length - 1
    for( let i = 0; i < array.length; i++ ) {
        array.splice( limit - i, 0, array.shift( ))
    }
    return array
}

function reverseInPlace2( array ) {
    let limit = array.length - 1
    for( let i = 0; i < limit/2; i++ ) {
        let temp = array[ i ];
        array[ i ] = array[limit - i];
        array[limit - i] = temp
    }
    return array
}

console.log( reverseInPlace( a ) );
console.log( reverseInPlace( b ) );