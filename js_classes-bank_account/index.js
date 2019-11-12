class Person {
    constructor(name, birth, money) {
        this.name = name;
        this.birth = birth;
        this.money = money;
        this.accountHistory = [`initial: ${money}`];
    }

    getInfo() {
        const now = new Date();
        const currYear = now.getFullYear();
        const birthYear = Number(this.birth.slice(-4));
        const age = currYear - birthYear;
        console.log(`Name: ${this.name}, Age: ${age}, Amount: ${this.money}$`);
    }

    addMoney(amount, info) {
        this.money += amount;
        this.accountHistory.push(`${info}: +${amount}`)
    }

    withdrawMoney(amount, info) {
        this.money -= amount;
        this.accountHistory.push(`${info}: -${amount}`)
    }

    getAccountHistory() {
        console.log(this.accountHistory)
    }
}

const Maryan = new Person('Maryan', '04.08.1989', 500);
Maryan.getInfo();
Maryan.addMoney(2000, 'salary');
Maryan.withdrawMoney(500, 'new phone');
Maryan.getInfo();
Maryan.getAccountHistory();
