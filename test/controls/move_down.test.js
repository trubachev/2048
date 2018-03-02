/* eslint-env mocha */

import { moveDown } from "../../src/controls"

import assert from "assert"

const callback = () => {}

describe("moveDown()", () => {

  it("should move grid down", () => {
    const state = {
      grid: [
        [2048, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ]
    }
    moveDown(state, callback)
    assert.equal(state.grid[3][0], 2048)
  })

  it("should collapse cell down", () => {
    const state = {
      grid: [
        [2, null, null, null],
        [2, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ]
    }
    moveDown(state, callback)
    assert.equal(state.grid[3][0], 4)
  })
})