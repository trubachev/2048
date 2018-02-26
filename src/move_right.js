export default (state) => {
  state.grid.forEach((row) => {
    let rowLength = row.length - 1
    
    for (var cellIndex = rowLength; cellIndex >= 0; cellIndex--) {
      const cell = row[cellIndex]
      
      if (!cell) continue
      if (cellIndex === rowLength) continue

      let newCellIndex = cellIndex + 1

      if (row[newCellIndex]) newCellIndex = cellIndex
      while(!row[newCellIndex+1] && (newCellIndex < rowLength)) newCellIndex++
      
      if (row[cellIndex] === row[newCellIndex+1]) {
        row[newCellIndex+1] = row[newCellIndex+1] + row[cellIndex]
        row[cellIndex] = null
      } else if (!row[newCellIndex]){
        row[newCellIndex] = cell
        row[cellIndex] = null
      }
    }
  })
}