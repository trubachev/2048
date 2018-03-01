import moveLine from "./move_line"

export default (state, callback) => {
  const oldGrid = state.grid.toString()

  state.grid = state.grid.map(moveLine)
  
  const newGrid = state.grid.toString()
  
  const gridChanged = oldGrid !== newGrid
  
  callback(state, gridChanged)
}