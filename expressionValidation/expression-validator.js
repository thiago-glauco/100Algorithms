module.exports = validator = ( expression ) => {
    //console.log( expression );
    let expressionArray = expression.split( '' );
    let checkClosed = [];
    expressionArray.forEach( el => {
        if( el.match( /[\(\[\{]/ ) ) {
            checkClosed.push( el );
        } else {
            let l = checkClosed.length - 1;
            switch( el ) {
                case( ')' ):
                    if( checkClosed[ l ] === '(' ){
                        checkClosed.pop( );
                    } else {
                        return false;
                    }
                    break;
                case( ']' ):
                    if( checkClosed[ l ] === '[' ){
                        checkClosed.pop( );
                    } else {
                        return false;
                    }
                    break;
                case( '}' ):
                    if( checkClosed[ l ] === '{' ){
                        checkClosed.pop( );
                    } else {
                        return false;
                    }
                    break;
                default:
            }
        }
    });
    //console.log( checkClosed );
    //console.log( checkClosed.length );
    return (checkClosed.length === 0 ? true : false);
}