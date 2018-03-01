import moveLine from "./move_line"

export default (state, callback) => {
  const oldGrid = state.grid.toString()

  let rotatedGrid = state.grid[0].map((col, i) => state.grid.map(row => row[i]))

  rotatedGrid = rotatedGrid.map(moveLine)

  rotatedGrid = rotatedGrid[0].map((col, i) => rotatedGrid.map(row => row[i]))
  rotatedGrid = rotatedGrid[0].map((col, i) => rotatedGrid.map(row => row[i]))

  state.grid = rotatedGrid[0].map((col, i) => rotatedGrid.map(row => row[i]))

  const newGrid = state.grid.toString()
  
  const gridChanged = oldGrid !== newGrid
  
  callback(state, gridChanged)
}