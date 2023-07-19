const Account = require("../src/account");


let today;

beforeEach(() => {
    today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
     
})

describe("Account", () => {
    it("creates a new deposit", () => {
        account = new Account();
        account.deposit(150);
        expect(account.transactionHistory.length).toEqual(1);
        expect(account.transactionHistory[0].runningBalance).toEqual(150.00);
        expect(account.transactionHistory[0].date).toEqual(today);
        expect(account.balance).toEqual(150.00);

    })

    it("adds a deposit then makes a withdrawal", () => {
        account = new Account();
        account.deposit(150);
        account.withdraw(30);
        expect(account.transactionHistory.length).toEqual(2);
        expect(account.transactionHistory[1].runningBalance).toEqual(120.00);
        expect(account.transactionHistory[1].date).toEqual(today);
        expect(account.balance).toEqual(120.00);
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

    it("can make a deposit that is an amount to 2 decimal places", () => {
        account = new Account();
        account.deposit(150.75);
        account.withdraw(30.75);
        expect(account.transactionHistory.length).toEqual(2);
        expect(account.balance).toEqual(120.00);
    })

    })
