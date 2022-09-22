module.exports = isPalindrome = ( s ) => {
    let arr = s.toLowerCase()
        .split( '' )
        .filter( ( el ) => el.match( /\w/ ) );
    return arr.join('') === arr.reverse( ).join('') ? true : false;
}