import { ANIMATION_TIME, CELL_SIZE } from "../constants"

export default (cell, callback) => {
  if (!cell.el) return
  
  const distX = cell.X * CELL_SIZE
  const currX = parseFloat(getComputedStyle(cell.el).left)
  let speed = Math.abs(currX - distX) / ANIMATION_TIME * 1000/60.0
  if (currX > distX) speed = -speed

  function moveCell () {
    var cur = parseFloat(getComputedStyle(cell.el).left)
    
    setTimeout(() => {
      if (Math.abs(cur - distX) > Math.abs(speed)) {
        cell.el.style.left = `${cur + speed}px`
        moveCell()
      } else {
        cell.el.style.left = `${distX}px`
        if (callback) callback()
      }
    }, 1000/60.0)
  }
  moveCell()
}