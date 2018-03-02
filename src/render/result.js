export default (state, rootEl) => {

  let resultText

  if (state.result) resultText = `You ${state.result}`
  else resultText = ""
  
  let resultLabel = document.getElementById("result")
  if (!resultLabel) {
    resultLabel = document.createElement("h2")
    resultLabel.setAttribute("id", "result")
    rootEl.appendChild(resultLabel)
  }

  resultLabel.innerHTML = resultText
}