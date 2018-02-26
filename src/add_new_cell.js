export default (state) => {
  let newCell
  const grid = state.grid
  if (Math.random() > 0.1) newCell = 2
  else newCell = 4

  const canAddCell = grid.map((row) => row.indexOf(null) === -1).indexOf(false) !== -1
  
  if (!canAddCell) {
    console.log("No moves. You lose")
    return
  }
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