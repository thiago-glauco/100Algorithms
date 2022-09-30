let s = "ab-cd";
let j = "!!A--Cde**hiOp..."

console.log( reverseSpecial( s ) );
console.log( reverseSpecial( j ) );

function reverseSpecial( s ) {
    let str = s.split( '' );
    let result = [];
    let specials = [];
    str.forEach(el => {
        if( el.match( /\w/ ) ) result.unshift( el );
    });

    specials = str.map( (el, index) => {
        return [el, index]
    }).filter( e => e[0].match( /\W/) );
    
    specials.forEach( e => {
        result.splice( e[1], 0, e[0] );
    })
    return result.join('');
}

