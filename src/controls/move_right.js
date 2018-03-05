import moveLine from "./move_line"

export default (state, callback) => {

  const oldGrid = JSON.stringify(state.grid)

  state.grid = state.grid.map(line => moveLine(line.reverse(), state, "X").reverse())
  state.grid.forEach(row => row.forEach(cell => {
    cell.wasX = 3 - cell.wasX
    cell.X = 3 - cell.X
    if (cell.removedCell) cell.removedCell.X = cell.X
  }))

  const newGrid = JSON.stringify(state.grid)
  
  const gridChanged = oldGrid !== newGrid

  callback(state, gridChanged)
}