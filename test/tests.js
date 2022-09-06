const expect = require( 'chai' ).expect;
const fs = require( 'fs' );
const towerBreakers = require( '../Tower Breakers/solution' );
const add = require( '../add/solution' );
const sortByLength = require( '../sortByLength/sort-by-length' );

let data = fs.readFileSync( './test/towerBreakerDataSet.txt' ).toString().split( '\r\n' );
let expected = fs.readFileSync( './test/towerBreakerResultsSet.txt' ).toString().split( '\r\n' );
//console.log( data );
describe( "Testing Towerbreaker Algorithm", ( ) => {
    for( let i = 0; i < data.length; i++) {
        let d = data[i].split( /\s+/ );
        it( `Will send ${d[0]}, ${d[1]} to towerBreake and will return ${ expected[ i ] }`, ( ) => {
            expect( towerBreakers( parseInt( d[0] ), parseInt( d[1] ) ) ).to.be.equal( parseInt( expected[ i ] ) );
        });
    }
});

describe( "testing undefined arguments Add", ( ) => {
    it( "Will add values", ( ) => {
        expect( add( 10, 32, 45, 57, 201 ) ).to.be.equal( 345 )
    })
})

describe( "testing sorting by length", ( ) => {
    let data = JSON.parse( fs.readFileSync( './test/sortByLengthDataSet.json' ).toString( ) );
    console.log( data );
    data.arrays.forEach( ( testCase ) => {
        it( "Will sort a string array by string length", ( ) => {
            expect( sortByLength( testCase.data ).toString( ) ).to.be.eq( testCase.sorted.toString( ) )
        })
        
    })
})
