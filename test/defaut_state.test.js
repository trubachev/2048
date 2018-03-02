/* eslint-env mocha */

import defaultState from "../src/default_state"

import assert from "assert"

const callback = () => {}

describe("defaultState()", () => {

  it("should return new state", () => {
    const state = {
      grid: [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
      ],
      score: 0,
      result: null
    }.toString()

    const newState = defaultState().toString()

    assert.equal(state, newState)
  })
})