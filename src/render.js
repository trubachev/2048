import { CELL_SIZE } from "./constants"


export default function (rootEl, state) {
  const gridEl = document.createElement("div")
  gridEl.setAttribute("id", "grid")
  gridEl.classList.add("grid")

  state.grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      const cellEl = document.createElement("div")
      cellEl.classList.add("cell")
      cellEl.classList.add("cell" + cell)
      cellEl.innerHTML = cell
      cellEl.style.left = cellIndex * CELL_SIZE 
      cellEl.style.top = rowIndex * CELL_SIZE
      gridEl.appendChild(cellEl)
    })
  })

  const oldGrid = document.getElementById("grid")
  if (oldGrid) rootEl.replaceChild(gridEl, oldGrid)
  else rootEl.appendChild(gridEl)


}