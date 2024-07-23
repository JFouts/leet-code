/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    const str = x.toString();
    const len = str.length-1;

    for (let i = 0, j = len; i < j; i++,j--) {
        if (str[i] != str[j]) {
            return false;
        }
    }
    
    return true;
};

module.exports = isPalindrome