export default function (line) {
  line.forEach((cell, index) => {

    if (!line[index]) {
      let cutSize = 0

      while(cutSize < line.length - index) {
        if (line[index + cutSize]) break
        cutSize++
      }

      if ((cutSize > 0) && (cutSize !== (line.length - index))) line = line.concat(line.splice(index, cutSize))
    }
    
    if (index === line.length - 1) return

    if (!line[index]) return
    if (line[index + 1] && (line[index] === line[index + 1])) {
      line[index] += line[index + 1]
      line[index + 1] = null
    } else if (line[index - 1] && (line[index] === line[index - 1])) {
      line[index - 1] += line[index - 1]
      line[index] = null
    }
  })
  return line
}