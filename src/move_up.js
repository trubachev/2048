export default (state) => {
  const grid = state.grid

  const rowLenght = grid[0].length - 1 
  for (var cellIndex = 0; cellIndex <= rowLenght; cellIndex++) {
    grid.forEach((row, rowIndex) => {
      const cell = row[cellIndex]
      if (!cell) return
      if (rowIndex === 0) return
      
      let newRowIndex = rowIndex - 1
      if (grid[newRowIndex][cellIndex] === grid[rowIndex][cellIndex]) newRowIndex = rowIndex
      else if (grid[newRowIndex][cellIndex]) newRowIndex = rowIndex
      
      while ((newRowIndex > 0)) {
        if (grid[newRowIndex-1][cellIndex]) break
        newRowIndex--
      }

      if ((newRowIndex === 0) && !(grid[newRowIndex][cellIndex])) {
        grid[newRowIndex][cellIndex] = cell
        grid[rowIndex][cellIndex] = null
      } else {
        if (grid[rowIndex][cellIndex] === grid[newRowIndex-1][cellIndex]) {
          grid[newRowIndex-1][cellIndex] = grid[newRowIndex-1][cellIndex] + grid[rowIndex][cellIndex]
          grid[rowIndex][cellIndex] = null
        } else if (!(grid[newRowIndex][cellIndex])) {
          grid[newRowIndex][cellIndex] = cell
          grid[rowIndex][cellIndex] = null
        }
      }
    })
  }
}