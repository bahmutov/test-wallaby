import { add } from './calc';

describe('add', () => {
  it('adds 2 numbers', () => {
    console.log('adding 2 + 3')
    expect(add(2, 3)).toBe(5)
  })
})
