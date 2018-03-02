/* eslint-env mocha */

import { isWin } from "../../src/controls"

import assert from "assert"

describe("isWin()", () => {
  it("should return true if state.grid contains 2048", () => {
    const state = {
      grid: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, 2048]
      ]
    }
    assert.equal(isWin(state), true)
  })

  it("should return false if state.grid does not contain 2048", () => {
    const state = {
      grid: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, 2],
        [null, null, null, 2]
      ]
    }
    assert.equal(isWin(state), false)
  })
})