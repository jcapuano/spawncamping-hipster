function middle_three(input) {
	// if null, throw
    if (!input) {
    	throw 'invalid input';
    }
    var str = input.toString().replace(/^\-/, '');
    // if even number of digits, throw
    if (str.length % 2 == 0) {
    	throw 'invalid input';
    }
    // if less than 3 digits, throw
    if (str.length < 3) {
    	throw 'invalid input';
    }
    // if not integer, throw
    if (str.match(/\./)) {
    	throw 'invalid input';
    }
    
    return parseInt(str.substr(Math.floor(str.length / 2)-1, 3));
}

module.exports = middle_three;
