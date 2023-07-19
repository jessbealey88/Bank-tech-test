const Statement = require("../src/statement");

describe("Statement", () => {
    it("can print an empty statement in the correct format", () => {
        statement = new Statement();
        expect(statement.print([])).toEqual(
            "date || credit || debit || balance"
        )
             
    })
})