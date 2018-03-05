export default (state) => {
  if (!state.canMove) return false
  for(let i = 0; i < state.grid.length; i++) {
    for(let j = 0; j < state.grid[0].length; j++) {
      if (!state.grid[i][j].value) return true

      if (state.grid[i][j].value === state.grid[i][j+1].value) return true
      if (i === state.grid.length - 1) continue
      if (state.grid[i][j].value === state.grid[i+1][j].value) return true
    }
  }
  return false
}