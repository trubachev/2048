/* eslint-env mocha */

import { moveLine } from "../../src/controls"

import assert from "assert"

describe("moveLine()", () => {
  it("should move single non empty cell left ", () => {
    const line = [null, null, null, 4]

    const newLine = moveLine(line)
    assert.equal(newLine[0], 4)
  })

  it("should move group of non empty cells left ", () => {
    const line = [null, 2, 4, null]

    const newLine = moveLine(line)
    assert.equal(newLine[0], 2)
    assert.equal(newLine[1], 4)
  })
  
  it("should move split of non empty cells left ", () => {
    const line = [null, 2, null, 4]

    const newLine = moveLine(line)
    assert.equal(newLine[0], 2)
    assert.equal(newLine[1], 4)
  })

  it("should collapse non empty cell with same value ", () => {
    const line = [null, 2, null, 2]

    const newLine = moveLine(line, { score: 0 })
    assert.equal(newLine[0], 4)
  })

  it("should increase score value when collapse cells", () => {
    const line = [null, 2, null, 2]
    const state = { score: 0 }
    moveLine(line, state)
    assert.equal(state.score, 4)
  })

  it("should not collapse cell more than one time", () => {
    const line = [2, 2, 2, 2]
    const newLine = moveLine(line, { score: 0 })
    assert.equal(newLine[0], 4)
    assert.equal(newLine[1], 4)
  })

})