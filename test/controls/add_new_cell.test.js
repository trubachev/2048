/* eslint-env mocha */

import { addNewCell } from "../../src/controls"

import assert from "assert"

describe("addNewCell()", () => {
  it("should add a new cell to the state.grid if there is empty cell", () => {
    let state = {
      grid: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ]
    }

    let oldStateString = state.grid.toString()
    addNewCell(state)
    let newStateString = state.grid.toString()

    assert.notEqual(oldStateString, newStateString)

    state = {
      grid: [
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, null]
      ]
    }

    oldStateString = state.grid.toString()
    addNewCell(state)
    newStateString = state.grid.toString()

    assert.notEqual(oldStateString, newStateString)

  })

  it("should not add a new cell to the state.grid if there is no empty cell", () => {
    const state = {
      grid: [
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2],
        [2, 2, 2, 2]
      ]
    }

    const oldStateString = state.grid.toString()
    addNewCell(state)
    const newStateString = state.grid.toString()

    assert.equal(oldStateString, newStateString)
  })
})