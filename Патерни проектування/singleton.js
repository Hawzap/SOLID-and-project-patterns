class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        this.value = Math.random();

        Singleton.instance = this;
    }

    getValue() {
        return this.value;
    }
}

// Використання
const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2); // true
console.log(obj1.getValue()); // наприклад 0.12345
console.log(obj2.getValue()); // той самий 0.12345
