let testArray = [-1, 5, 9, 2, -1, 3, 1, -1, 8, 4];

console.log( sortByHeight( testArray ) );


function sortByHeight( arr, ignore = -1 ) {
    let trees = Object.entries( arr ).filter( e => e[1] === ignore );
    //console.log( trees );
    let sorted = arr.filter( e => e !== -1 ).sort( (a, b) => a -b );

    trees.forEach( tree => {
        sorted.splice( parseInt( tree[0] ),0, tree[1] )
    } );

    return sorted;

}

module.exports = sortByHeight;

