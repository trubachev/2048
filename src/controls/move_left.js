import moveLine from "./move_line"

export default (state, callback) => {
  
  const oldGrid = JSON.stringify(state.grid)

  state.grid = state.grid.map(line=> moveLine(line, state, "X"))
  
  const newGrid = JSON.stringify(state.grid)
  
  const gridChanged = oldGrid !== newGrid
  
  callback(state, gridChanged)
}