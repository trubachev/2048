import { CELL_SIZE } from "../constants"

export default (state, rootEl) => {
  const gridEl = document.createElement("div")
  gridEl.setAttribute("id", "grid")
  gridEl.classList.add("grid")

  
  state.grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const cellEl = document.createElement("div")
      cellEl.classList.add("cell")
      if (cell.value) cellEl.classList.add("cell" + cell.value)
      cellEl.innerHTML = cell.value
      cellEl.style.left = cellIndex * CELL_SIZE 
      cellEl.style.top = rowIndex * CELL_SIZE
      gridEl.appendChild(cellEl)

      cell.el = cellEl
    })
  })

  const oldGrid = document.getElementById("grid")
  if (oldGrid) rootEl.replaceChild(gridEl, oldGrid)
  else rootEl.appendChild(gridEl)
}