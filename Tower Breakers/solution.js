function towerBreakers(n, m) {
    // Write your code here
    if( m === 1 ) {
        return 2;
    }
    
    if( n === 1 ) {
        return 1;
    }
    
    if( n % 2 === 0) {
        return 2
    }
    
    return 1;
}

module.exports = towerBreakers;
