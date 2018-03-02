/* eslint-env mocha */

import { moveRight } from "../../src/controls"

import assert from "assert"

const callback = () => {}

describe("moveRight()", () => {

  it("should move grid right", () => {
    const state = {
      grid: [
        [2048, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ]
    }
    moveRight(state, callback)
    assert.equal(state.grid[0][3], 2048)
  })

  it("should collapse cell right", () => {
    const state = {
      grid: [
        [2, 2, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ]
    }
    moveRight(state, callback)
    assert.equal(state.grid[0][3], 4)
  })
})