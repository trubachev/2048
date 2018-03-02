import moveLine from "./move_line"

export default (state, callback) => {

  const oldGrid = state.grid.toString()

  state.grid = state.grid.map(line => moveLine(line.reverse(), state).reverse())
  
  const newGrid = state.grid.toString()
  
  const gridChanged = oldGrid !== newGrid

  callback(state, gridChanged)
}