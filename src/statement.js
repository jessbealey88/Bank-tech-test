class Statement {
    constructor() {
        this.statementContent = "date || credit || debit || balance"

    }

    print(transactions) {
        return this.statementContent;


    }

}

module.exports = Statement;