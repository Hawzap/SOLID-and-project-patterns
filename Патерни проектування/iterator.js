class NumbersCollection {
    constructor(numbers) {
        this.numbers = numbers;
    }

    getIterator() {
        let index = 0;
        const numbers = this.numbers;

        return {
            next() {
                if (index < numbers.length) {
                    return { value: numbers[index++], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    }
}

const collection = new NumbersCollection([10, 20, 30]);
const iterator = collection.getIterator();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { done: true }
