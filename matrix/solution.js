let a = [ [1, 2], [3, 4] ];
let k = [[1,2,3,4], [8,7,6,5], [9, 10, 11, 12], [13,14,15,16]]

function subMatrixSum( m ) {

    let greaterEdges = [];
    let greaterVerticals = [];
    let greaterHorizontals = [];

        for( let line = 0, mirrorLine = m.length -1; line < m.length/2 ; line ++, mirrorLine-- ) {
            for( let column = 0, mirrorColumn = m.length - 1; column < m.length/2; column++, mirrorColumn-- ) {
                let temp = [
                    m[line][column],
                    m[line][mirrorColumn],
                    m[mirrorLine][column],
                    m[mirrorLine][mirrorColumn]
                ];
                console.log(temp);
                greaterEdges.push( temp.sort((a, b) => { a - b}).reverse( )[0] );
            }
         }
    return greaterEdges.reduce( (a,b) => a + b, 0 );
}

console.log( subMatrixSum( a ) );
console.log( subMatrixSum( k ) );