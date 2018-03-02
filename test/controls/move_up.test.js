/* eslint-env mocha */

import { moveUp } from "../../src/controls"

import assert from "assert"

const callback = () => {}

describe("moveUp()", () => {

  it("should move grid up", () => {
    const state = {
      grid: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [2048, null, null, null]
      ]
    }
    moveUp(state, callback)
    assert.equal(state.grid[0][0], 2048)
  })

  it("should collapse cell up", () => {
    const state = {
      grid: [
        [2, null, null, null],
        [2, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ]
    }
    moveUp(state, callback)
    assert.equal(state.grid[0][0], 4)
  })
})