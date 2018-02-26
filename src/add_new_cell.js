export default (state) => {
  let newCell
  const grid = state.grid
  if (Math.random() > 0.1) newCell = 2
  else newCell = 4

  let randomRow = Math.round(Math.random() * (grid.length - 1))
  let randomCol = Math.round(Math.random() * (grid.length - 1))
  let selectedCell = grid[randomRow][randomCol]
  while (selectedCell) {
    randomRow = Math.round(Math.random() * (grid.length - 1))
    randomCol = Math.round(Math.random() * (grid.length - 1))
    selectedCell = grid[randomRow][randomCol]
  }
  grid[randomRow][randomCol] = newCell
}