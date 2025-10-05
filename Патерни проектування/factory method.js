// Базовий клас "Продукт"
class Transport {
    move() {
        throw new Error("Метод повинен бути реалізований у підкласі");
    }
}

// Конкретні продукти
class Car extends Transport {
    move() {
        return "Їду на машині";
    }
}

class Bike extends Transport {
    move() {
        return "Їду на велосипеді";
    }
}

class TransportFactory {
    static createTransport(type) {
        if (type === "car") {
            return new Car();
        } else if (type === "bike") {
            return new Bike();
        }
        throw new Error("Невідомий тип транспорту");
    }
}
