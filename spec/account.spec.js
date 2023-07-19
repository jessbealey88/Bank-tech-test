const Account = require("../src/account");

describe("Account", () => {
    it("creates a new deposit", () => {
        account = new Account();
        account.deposit(150);
        expect(account.transactionHistory.length).toEqual(1);
        expect(account.transactionHistory[0].runningBalance).toEqual(150);
        expect(account.transactionHistory[0].date).toEqual("19/07/2023");
        expect(account.balance).toEqual(150);

    })

    it("adds a deposit then makes a withdrawal", () => {
        account = new Account();
        account.deposit(150);
        account.withdraw(30);
        expect(account.transactionHistory.length).toEqual(2);
        expect(account.transactionHistory[1].runningBalance).toEqual(120);
        expect(account.transactionHistory[1].date).toEqual("19/07/2023");
        expect(account.balance).toEqual(120);
    })

    it("throws an error if a withdrawal is attempted that is more than the balance", () => {
        account = new Account();
        account.deposit(150);
        try {
            account.withdraw(230);
        } catch (error) {
            expect(error.message).toBe("This amount exceeds your current balance of: 150");
        } 
    })
})