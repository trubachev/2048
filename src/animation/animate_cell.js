import { ANIMATION_TIME, CELL_SIZE } from "../constants"

export default (cell) => {
  if (!cell.el) return

  const distX = cell.X * CELL_SIZE
  const currX = parseFloat(getComputedStyle(cell.el).left)
  let speed = Math.abs(currX - distX) / ANIMATION_TIME / 60

  if (currX > distX) speed = -speed

  function moveCell () {
    var cur = parseFloat(getComputedStyle(cell.el).left)
    
    setTimeout(function () {
      if (Math.abs(cur - distX) > Math.abs(speed)) {
        cell.el.style.left = `${cur + speed}px`
        moveCell()
      } else {

        if (cell.newValue) {
          cell.el.style.left = `${distX}px`
          cell.el.innerHTML = cell.newValue
        } else {
          cell.el.remove()
        }
        
      }
    }, 1000/60.0)
  }
  moveCell()
}