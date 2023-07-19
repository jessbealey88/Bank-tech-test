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
})