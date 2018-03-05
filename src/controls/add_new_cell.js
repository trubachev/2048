export default (state) => {
  const grid = state.grid

  const newCell = {}
  
  if (Math.random() > 0.1) newCell.value = 2
  else newCell.value = 4

  const canAddCell = grid.map(row => row.map(el => el.value).indexOf(null)).indexOf(-1) !== -1 
  console.log(canAddCell)
  console.log(state) 
  if (!canAddCell) return

  let randomRow = Math.round(Math.random() * (grid.length - 1))
  let randomCol = Math.round(Math.random() * (grid.length - 1))
  let selectedCell = grid[randomRow][randomCol]
  while (selectedCell.value) {
    randomRow = Math.round(Math.random() * (grid.length - 1))
    randomCol = Math.round(Math.random() * (grid.length - 1))
    selectedCell = grid[randomRow][randomCol]
  }
  grid[randomRow][randomCol] = newCell
}