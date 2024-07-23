/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const prefix = [];
    const limit = Math.min(...strs.map(x => x.length));
    for (let i = 0; i < limit; i++) {
       let c = null;
       for (let s of strs) {
        if (c == null) {
            c = s[i];
        } else if (c != s[i]) {
            return prefix.join('');
        }
       }
       prefix.push(c); 
    }
    return prefix.join('')
};

module.exports = longestCommonPrefix;