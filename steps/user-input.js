const readline = require('readline-sync')

function step(content) {
    content.rawUserSalary = askAndReturnSalary()

    function askAndReturnSalary() {
        return readline.questionInt('Digite seu salário: ')
    }
}

let another_thing = 'new';
const new_feat = true;

module.exports = step