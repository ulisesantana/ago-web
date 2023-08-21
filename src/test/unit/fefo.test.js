const { strict: assert } = require('node:assert')
const { describe, it } = require('node:test')
const fefo = require('../../data/fefo')

describe('fefo should', () => {
  describe('work whit dates', () => {
    it('returning the date string based on locale', () => {
      const date = new Date('2023/03/01')

      assert.equal(
        fefo.dates.toLocaleDateString(date, 'es'),
        'miércoles, 1 de marzo de 2023'
      )
      assert.equal(
        fefo.dates.toLocaleDateString(date, 'en'),
        'Wednesday, March 1, 2023'
      )
    })
  })
})
