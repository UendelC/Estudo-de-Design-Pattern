const readline = require('readline-sync')

function step(content) {
    content.rawUserSalary = askAndReturnSalary()

    function askAndReturnSalary() {
        return readline.questionInt('Digite seu salário: ')
    }
}

module.exports = step