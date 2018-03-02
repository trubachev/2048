/* eslint-env mocha */

import { canMove } from "../../src/controls"

import assert from "assert"

describe("canMove()", () => {
  it("should return true if there is available move on state.grid", () => {
    let state = {
      grid: [
        [null, null, null, 2],
        [null, null, null, 2],
        [null, null, null, null],
        [null, null, null, null]
      ]
    }
    assert.equal(canMove(state), true)

    state = {
      grid: [
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2]
      ]
    }
    assert.equal(canMove(state), true)

    state = {
      grid: [
        [2, 4, 2, 8],
        [4, 2, 4, 8],
        [2, 4, 2, 8],
        [4, 2, 4, 8]
      ]
    }
    assert.equal(canMove(state), true)

    state = {
      grid: [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [8, 8, 8, 8]
      ]
    }
    assert.equal(canMove(state), true)
    
  })

  it("should return false if there isn't available move on state.grid", () => {
    const state = {
      grid: [
        [2, 4, 2, 4],
        [4, 2, 4, 2],
        [2, 4, 2, 4],
        [4, 2, 4, 2]
      ]
    }
    assert.equal(canMove(state), false)
  })
})