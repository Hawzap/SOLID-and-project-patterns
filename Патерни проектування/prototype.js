class Prototype {
    clone() {
        throw new Error("Метод clone() повинен бути реалізований у підкласі");
    }
}

class Car extends Prototype {
    constructor(model, color) {
        super();
        this.model = model;
        this.color = color;
    }

    drive() {
        return `${this.model} (${this.color}) їде!`;
    }

    clone() {
        return new Car(this.model, this.color);
    }
}

const originalCar = new Car("Toyota", "red");

const clonedCar = originalCar.clone();
