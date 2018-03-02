/* eslint-env mocha */

import { moveLeft } from "../../src/controls"

import assert from "assert"

const callback = () => {}

describe("moveLeft()", () => {

  it("should move grid left", () => {
    const state = {
      grid: [
        [null, null, null, 2048],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ]
    }
    moveLeft(state, callback)
    assert.equal(state.grid[0][0], 2048)
  })

  it("should collapse cell left", () => {
    const state = {
      grid: [
        [2, 2, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ]
    }
    moveLeft(state, callback)
    assert.equal(state.grid[0][0], 4)
  })
})