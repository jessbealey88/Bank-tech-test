const Account = require("../src/account");

describe("Account", () => {
    it("creates a new deposit", () => {
        account = new Account();
        account.deposit(150);
        expect(account.transactionHistory.length).toEqual(1);
        expect(account.transactionHistory[0].runningbalance).toEqual(150);
        expect(account.transactionHistory[0].date).toEqual("18/07/2023");

    })
})