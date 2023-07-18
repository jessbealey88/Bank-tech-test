class Account {
    constructor() {
        this.balance = 0;
        this.transactionHistory = [];
    }

    deposit(amount) {
        this.balance += amount;
        const currentDate = this.getCurrentDate(); 
        this.transactionHistory.push({date: currentDate, type: "deposit", amount: amount, runningbalance: this.balance })

    }

    withdrawal(amount) {
        this.balance -= amount;
        const currentDate = this.getCurrentDate();
        this.transactionHistory.push({date: currentDate, type: "withdrawal", amount: amount, runningbalance: this.balance})
    }


    private

    getCurrentDate() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        return `${day}/${month}/${year}`;
    }
}

module.exports = Account;