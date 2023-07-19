const Account = require("../src/account");
const Statement = require("../src/statement");


let today;

beforeEach(() => {
    today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
     
});

describe("Statement", () => {
    it("prints a statement of the transaction history", () => {
        account = new Account();
        account.deposit(150);
        account.withdraw(30);
        account.deposit(70);

        expect(account.printStatement()).toEqual(`date || credit || debit || balance\n19/07/2023 || 70.00 ||  || 190.00\n19/07/2023 ||  || 30.00 || 120.00\n19/07/2023 || 150.00 ||  || 150.00`);

    })
})



