export default (state) => {
  
  for(let i = 0; i < state.grid.length; i++) {
    for(let j = 0; j < state.grid[0].length; j++) {
      if (!state.grid[i][j]) return true

      if (state.grid[i][j] === state.grid[i][j+1]) return true
      if (i === state.grid.length - 1) continue
      if (state.grid[i][j] === state.grid[i+1][j]) return true
    }
  }

}