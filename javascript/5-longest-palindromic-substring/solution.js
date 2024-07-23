/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLen = 0;
    let maxJ = 0, maxK = 0;
    for (let i = 0; i < s.length; i++) {
        // Case Odd
        let pLen = 1;
        let j = i-1, k = i+1;
        for (; j >= 0 & k < s.length; j--,k++) {
            if (s[j] == s[k]) {
                pLen+=2;
            } else {
                break;
            }

            if (pLen > maxLen) {
                maxLen = pLen;
                maxJ = j;
                maxK = k;
            }
        }
        
        // Case Even
        pLen = 0;
        j = i, k = i+1;
        for (; j >= 0 & k < s.length; j--,k++) {
            if (s[j] == s[k]) {
                pLen+=2;
            } else {
                break;
            }

            if (pLen > maxLen) {
                maxLen = pLen;
                maxJ = j;
                maxK = k;
            }
        }

    }

    return s.substring(maxJ, maxK+1);
};

module.exports = longestPalindrome;