class Numberdrome {
    constructor() {
        this.numbers = [];
    }

    addNumber(n) {
        this.numbers.push(n);
    }

    removeNumber(n) {
        const i = this.numbers.indexOf(n);
        this.numbers.splice(i, 1);
    }

    sum() {
        if (!this.numbers.length) { return 0; }
        return this.numbers.reduce((a, b) => a + b, 0);
    }

    product() {
        if (!this.numbers.length) { return 1; }
        return this.numbers.reduce((a, b) => a * b, 1);
    }

    min() {
        return Math.min(...this.numbers);
    }

    max() {
        return Math.max(...this.numbers);
    }
}

const numberdrome = new Numberdrome();
numberdrome.addNumber(5);
numberdrome.addNumber(10);
numberdrome.addNumber(15);
numberdrome.addNumber(20);
numberdrome.removeNumber(5);
console.log(numberdrome.numbers)
console.log(numberdrome.sum());
console.log(numberdrome.product());
console.log(numberdrome.min());
console.log(numberdrome.max());