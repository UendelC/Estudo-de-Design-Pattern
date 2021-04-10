const { test, expect } = require('@jest/globals')
const TaxReducer = require('../steps/tax-reducer.js')

test('deducts the right value', () => {
    const data  = [
        {rawUserSalary: 100, expected:95},
        {rawUserSalary: 600, expected: 540},
        {rawUserSalary: 1500, expected: 1275},
    ]

    data.forEach(content => {
        TaxReducer(content)
        expect(content.deductedUserSalary).toBe(content.expected)
    })
})