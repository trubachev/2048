export default function (line, state) {

  line = line.filter(el => !!el)

  line.forEach((cell, index) => {
    if (cell === line[index + 1]) {
      line[index] += line[index + 1]
      line.splice(index + 1, 1)
      state.score += line[index]
    }
  })

  line = line.concat(Array(4 - line.length).fill(null))
  return line
}