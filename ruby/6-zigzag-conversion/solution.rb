# @param {String} s
# @param {Integer} num_rows
# @return {String}
def convert(s, num_rows)
  if num_rows == 1
      return s
  end
  
  x, y = 0, 0
  dx, dy = 0, 1

  grid = init_grid(s, num_rows)

  s.each_char do |c|
      grid[y][x] = c;
      
      if y + dy >= num_rows || y + dy < 0
          dx ^= 1
          dy *= -1;
      end

      x += dx;
      y += dy;
  end

  return grid.join;
end

def init_grid(s, num_rows)
  num_cols = (s.length / num_rows) + (s.length % num_rows > 0 ? 1 : 0)
  return Array.new(num_rows) { Array.new(num_cols, '') }
end