export default (state, rootEl) => {
  let scoreLabel = document.getElementById("score")
  if (scoreLabel) scoreLabel.innerHTML = `Score: ${state.score}`
  else {
    scoreLabel = document.createElement("h2")
    scoreLabel.setAttribute("id", "score")
    scoreLabel.innerHTML = `Score: ${state.score}`
    rootEl.appendChild(scoreLabel)
  }
}