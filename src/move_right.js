export default (state) => {
  state.grid.forEach((row) => {
    const rowLength = row.length - 1
    row.reverse().forEach((cell, cellIndex) => {  
      if (!cell) return
      if (cellIndex === rowLength) return

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
    })
  })
}