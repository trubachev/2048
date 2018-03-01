import moveLine from "./move_line"

export default (state, callback) => {

  const oldGrid = state.grid.toString()

  state.grid = state.grid.map(line => {
    return moveLine(line.reverse()).reverse()
  })
  
  const newGrid = state.grid.toString()
  
  const gridChanged = oldGrid !== newGrid

  callback(state, gridChanged)
}