function add( ...v ) {
    
    return v.reduce( (a,b) => a + b, 0 )
}

module.exports = add;

