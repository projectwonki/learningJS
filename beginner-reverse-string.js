
/**
 * this function is to make reverse string character
 * with only string as an input
 * @param {*} s 
 */
 function reverseString(s) {
    if (typeof s === 'string') {
        var a = s.split('');

        var b = a.reverse();
    
        var c = b.join('');
        
        return c;
    } else {
        return 's.split is not a function';
    }
}

console.log(reverseString(1234));