/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) { 
        return s;
    }

    let x = 0;
    let y = 0;
    let dX = 0;
    let dY = 1;
    const numCols = Math.trunc(s.length / numRows) + (s.length % numRows > 0 ? 1 : 0);

    const grid = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        grid[i] = new Array(numCols);
    }

    for(let i = 0; i < s.length; i++) {
        grid[y][x] = s[i];
        
        if (y + dY >= numRows || y + dY < 0) {
            dX = dX ? 0 : 1;
            dY *= -1;
        }

        x += dX;
        y += dY;
    }

    return grid.map(x => x.join('')).join('');
};

module.exports = convert;