/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let i = 0, j = height.length-1;
    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j-i); 
        maxArea = Math.max(maxArea, area);
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
};

module.exports = maxArea;