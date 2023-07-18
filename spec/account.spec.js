const Account = require("../src/account");

describe("Account", () => {
    it("creates a new deposit", () => {
        account = new Account();
        account.deposit(150);
        expect(account.transactionHistory.length).toEqual(1);
        expect(account.transactionHistory[0].runningbalance).toEqual(150);
        expect(account.transactionHistory[0].date).toEqual("18/07/2023");
        expect(account.balance).toEqual(150)

    })

    it("adds a deposit then makes a withdrawal", () => {
        account = new Account();
        account.deposit(150);
        account.withdrawal(30);
        expect(account.transactionHistory.length).toEqual(2);
        expect(account.transactionHistory[1].runningbalance).toEqual(120);
        expect(account.transactionHistory[1].date).toEqual("18/07/2023");
        expect(account.balance).toEqual(120);
    })
})