export default (state) => {
  const grid = state.grid

  const rowLength = grid[0].length - 1 
  for (var cellIndex = 0; cellIndex <= rowLength; cellIndex++) {

    for (var rowIndex = rowLength; rowIndex >= 0; rowIndex--) {
      const cell = grid[rowIndex][cellIndex]
      if (!cell) continue
      if (rowIndex === rowLength) continue

      let newRowIndex = rowIndex + 1

      if ((grid[newRowIndex][cellIndex] === grid[rowIndex][cellIndex]) ||
          (grid[newRowIndex][cellIndex])) newRowIndex = rowIndex

      while (newRowIndex < rowLength) {
        if (grid[newRowIndex + 1][cellIndex]) break
        newRowIndex++
      }

      if ((newRowIndex === rowLength) && !grid[newRowIndex][cellIndex]) {
        grid[newRowIndex][cellIndex] = cell
        grid[rowIndex][cellIndex] = null
      } else {
        if (grid[rowIndex][cellIndex] === grid[newRowIndex+1][cellIndex]) {
          grid[newRowIndex+1][cellIndex] = grid[newRowIndex+1][cellIndex] + grid[rowIndex][cellIndex]
          grid[rowIndex][cellIndex] = null
        } else if (!(grid[newRowIndex][cellIndex])) {
          grid[newRowIndex][cellIndex] = cell
          grid[rowIndex][cellIndex] = null
        }
      }
    }
  }
}