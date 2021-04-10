const { test, expect } = require('@jest/globals')
const printer = require('../steps/printer.js')

test('prints the expected salary', () => {
    console.log = jest.fn();
    const content = {
        deductedUserSalary: 95,
    }

    printer(content)

    expect(console.log).toHaveBeenCalledWith('O salário líquido do funcionário é: 95');
});
