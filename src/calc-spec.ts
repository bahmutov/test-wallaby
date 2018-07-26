import { add } from './calc';

describe('add', () => {
  it('adds 2 numbers', () => {
    expect(add(2, 3)).toBe(5)
  })
})
