import startApp from "./app"

document.addEventListener("DOMContentLoaded", () => {
  startApp()

  const line = [8, 8, 8, 8]

  console.log(line)

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      line.forEach((cell, index) => {
        if (!cell) {
          let cutSize = 0

          while(cutSize < line.length - index) {
            if (line[index + cutSize]) break
            cutSize++
          } 
          if (cutSize !== (line.length - 1 - index)) {
            line.splice(index, cutSize)
            for (let i = 0; i < cutSize; i++) line.push(null)
          }
        }
        
        if (index === line.length - 1) return

        if (cell && line[index + 1] && (line[index] === line[index + 1])) {
          line[index] += line[index + 1]
          line[index + 1] = null
        }
      })
      console.log(line)
    }
  })
})