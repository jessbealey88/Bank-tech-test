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
        transaction = [{date: "19/07/2023", type: "deposit", amount: 150, runningBalance: 150}]
        expect(statement.print(transaction)).toEqual(`date || credit || debit || balance\n19/07/2023 || 150 ||  || 150`)
    })

    it("prints a statement with multiple transactions with the newest first", () => {
        statement = new Statement();
        transactions = [{date: "19/07/2023", type: "deposit", amount: 150, runningBalance: 150},{date: "19/07/2023", type: "withdrawal", amount: 30, runningBalance: 120}]
        expect(statement.print(transactions)).toEqual(`date || credit || debit || balance\n19/07/2023 ||  || 30 || 120\n19/07/2023 || 150 ||  || 150`)

    })


})