const steps = {
    UserInput: require('./steps/user-input.js'),
    TaxReducer: require('./steps/tax-reducer.js'),
    Printer: require('./steps/printer.js'),
}

function start() {
    const content = {}

    steps.UserInput(content)
    steps.TaxReducer(content)
    steps.Printer(content)
}

start()