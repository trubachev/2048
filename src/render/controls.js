export default (state, rootEl) => {

  let newButton = document.getElementById("new-game")
  if (!newButton) {
    newButton = document.createElement("button")  
    newButton.setAttribute("id", "new-game")
    newButton.classList.add("button")
    newButton.innerHTML = "new game"
    rootEl.appendChild(newButton)
  }
}