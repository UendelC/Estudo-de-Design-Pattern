
function step(content) {
    showUserDeductedSalary()

    function showUserDeductedSalary() {
        console.log('O salário líquido do funcionário é: ' + content.deductedUserSalary)
    }
}

module.exports = step