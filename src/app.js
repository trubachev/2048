import render from "./render"
import defaultState from "./default_state"
import addNewCell from "./add_new_cell"
import moveLeft from "./move_left"
import moveRight from "./move_right"

export default function () {
  console.log("App started")

  const state = defaultState()

  // addNewCell(state)
  // addNewCell(state)

  const rootEl = document.getElementById("root")
  render(rootEl, state)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") console.log("Up")
    if (e.key === "ArrowDown") console.log("Down")
    if (e.key === "ArrowLeft") {
      moveLeft(state)
      // addNewCell(state)
      render(rootEl, state)
    }
    if (e.key === "ArrowRight") {
      moveRight(state)
      // addNewCell(state)
      render(rootEl, state)
    }
  })

}