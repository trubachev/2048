export default () => {
  return {
    grid: [
      [{ value: null }, { value: 2 }, { value: null }, { value: 2 } ],
      [{ value: 4 }, { value: 2 }, { value: 8 }, { value: 16 } ],
      [{ value: 2 }, { value: 2 }, { value: 2 }, { value: 2 } ],
      [{ value: null }, { value: null }, { value: null }, { value: null } ]
    ],
    score: 0,
    result: null,
    canMove: true
  }
}