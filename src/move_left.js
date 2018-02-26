export default (state) => {
  state.grid.forEach((row) => {
    row.forEach((cell, cellIndex) => {
      if (!cell) return
      if (cellIndex === 0) return
      
      let newCellIndex = cellIndex - 1
      if (row[newCellIndex]) newCellIndex = cellIndex

      while(!row[newCellIndex-1] && (newCellIndex > 0)) newCellIndex--

      if (row[cellIndex] === row[newCellIndex-1]) {
        row[newCellIndex-1] = row[newCellIndex-1] + row[cellIndex]
        row[cellIndex] = null
      } else if (!row[newCellIndex]) {
        row[newCellIndex] = cell
        row[cellIndex] = null
      }
    })
  })
}