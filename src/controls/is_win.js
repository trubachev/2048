export default (state) => {

  for(let i = 0; i < state.grid.length; i++)
    for(let j = 0; j < state.grid[0].length; j++) 
      if (state.grid[i][j] >= 2048) return true
  return false
}