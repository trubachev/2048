export default function (line, state, direction) {
  const wasDi = `was${direction}`

  line.forEach((cell, index) => (!cell[wasDi]) ? cell[wasDi] = index : null)

  line = line.filter(el => !!el.value)

  line.forEach((cell, index) => {
    if (index === line.length - 1) return

    if (cell.value === line[index + 1].value) {
      cell.valueWas = cell.value
      cell.newValue = cell.value + line[index + 1].value
      cell.removedCell = line.splice(index + 1, 1)[0]

      state.score += cell.value
    }
  })
  

  line = line.concat(Array(4 - line.length).fill().map(() => ({value: null})))
  line.forEach((cell, index) => {
    if (cell[direction]) cell[wasDi] = cell[direction]
    cell[direction] = index
    if (cell.removedCell) cell.removedCell[direction] = index
  })
  return line
}