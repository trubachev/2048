import render from "./render"
import defaultState from "./default_state"
import addNewCell from "./add_new_cell"
import moveLeft from "./move_left"
import moveRight from "./move_right"
import moveUp from "./move_up"
import moveDown from "./move_down"

export default function () {
  console.log("2048 app started")

  const state = defaultState()

  addNewCell(state)
  addNewCell(state)

  const rootEl = document.getElementById("root")
  render(rootEl, state)

  function controllCallback(state, stateChanged) {
    if (!stateChanged) return
    addNewCell(state)
    render(rootEl, state)
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") moveUp(state, controllCallback)
    if (e.key === "ArrowDown") moveDown(state, controllCallback)
    if (e.key === "ArrowLeft") moveLeft(state, controllCallback)
    if (e.key === "ArrowRight") moveRight(state, controllCallback)
  })

}