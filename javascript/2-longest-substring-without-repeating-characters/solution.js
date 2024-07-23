/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const subString = new Map();
    let start = 0;

    let maxLength = 0;

    for(let i=0;i < s.length;i++) {
        if (subString.has(s[i])) {
            const i2 = subString.get(s[i]);
            if (i2 >= start)
            {
                start = i2+1;
            }
        }
        
        subString.set(s[i], i);

        const length = i - start + 1;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
};

module.exports = lengthOfLongestSubstring;