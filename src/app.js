import render from "./render/index"
import defaultState from "./default_state"
import { addNewCell, moveUp, moveDown, moveRight, moveLeft, isWin, canMove } from "./controls"
import { animateCell } from "./animation"
import { ANIMATION_TIME } from "./constants"

export default function () {

  console.log("2048 app started")

  let state

  state = defaultState()
  const rootEl = document.getElementById("root")
  newGame()

  document.addEventListener("keydown", (e) => {
    if (state.result) return
    if (!canMove(state)) return

    // if (e.key === "ArrowUp") moveUp(state, controllCallback)
    // if (e.key === "ArrowDown") moveDown(state, controllCallback)
    if (e.key === "ArrowLeft") moveLeft(state, controllCallback)
    if (e.key === "ArrowRight") moveRight(state, controllCallback)
  })

  const newGameButton = document.getElementById("new-game")
  newGameButton.addEventListener("click", (e) => {
    e.preventDefault()
    newGame()
  })

  function newGame() {
    state = defaultState()
    // addNewCell(state)
    // addNewCell(state)
    render(state, rootEl)
  }

  function controllCallback(state, stateChanged) {
    if (!stateChanged) return

    state.canMove = false
    state.grid.forEach(row => row.forEach(cell => {
      animateCell(cell, () => {
        if (!cell.newValue) return
        cell.el.classList.remove(`cell${cell.value}`)
        cell.value = cell.newValue
        cell.newGame = null
        cell.el.classList.add(`cell${cell.value}`)
        cell.el.innerHTML = cell.value
      })

      if (cell.removedCell) animateCell(cell.removedCell, () => {
        cell.removedCell.el.remove()
        cell.removedCell = null
      })
    }))

    setTimeout(() => {
      state.canMove = true
      addNewCell(state)
      if (isWin(state)) state.result = "win"
      if (!canMove(state)) state.result = "lose"
      render(state, rootEl)
    }, ANIMATION_TIME)
  }
}