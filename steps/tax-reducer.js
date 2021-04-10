
function step(content) {
    content.deductedUserSalary = deductUserSalary(content.rawUserSalary)

    function deductUserSalary(rawSalary) {
        
        if (rawSalary < 300) {
            return rawSalary*0.95
        } 

        if (rawSalary <= 1200) {
            return rawSalary*0.90
        }

        return rawSalary*0.85
    }
}

module.exports = step