import renderGrid from "./grid"
import renderScore from "./score"
import renderResult from "./result"
import renderControls from "./controls"


export default function (state, rootEl) {

  renderScore(state, rootEl)
  renderGrid(state, rootEl)
  renderResult(state, rootEl)
  renderControls(state, rootEl)

}