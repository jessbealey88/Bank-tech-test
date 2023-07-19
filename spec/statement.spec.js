const Statement = require("../src/statement");

describe("Statement", () => {
    it("can print an empty statement in the correct format", () => {
        statement = new Statement();
        expect(statement.print([])).toEqual(
            "date || credit || debit || balance"
        )        
    });

    it("prints a statement with a single deposit", () => {
        statement = new Statement();
        transaction = [{date: "19/07/2023", type: "deposit", amount: 150.00, runningBalance: 150.00}]
        expect(statement.print(transaction)).toEqual(`date || credit || debit || balance\n19/07/2023 || 150.00 ||  || 150.00`)
    })

    it("prints a statement with multiple transactions with the newest first", () => {
        statement = new Statement();
        transactions = [{date: "19/07/2023", type: "deposit", amount: 150.00, runningBalance: 150.00},{date: "19/07/2023", type: "withdrawal", amount: 30.00, runningBalance: 120.00}]
        expect(statement.print(transactions)).toEqual(`date || credit || debit || balance\n19/07/2023 ||  || 30.00 || 120.00\n19/07/2023 || 150.00 ||  || 150.00`)

    })
    it("prints a statement correctly when amount has 2 decimal places", () => {
        statement = new Statement();
        transactions = [{date: "19/07/2023", type: "deposit", amount: 150.75, runningBalance: 150.75},{date: "19/07/2023", type: "withdrawal", amount: 30.75, runningBalance: 120.00}]
        expect(statement.print(transactions)).toEqual(`date || credit || debit || balance\n19/07/2023 ||  || 30.75 || 120.00\n19/07/2023 || 150.75 ||  || 150.75`)

    })

})