// Створюємо інтерфейси

class Printer {
    print() {}
}

class Scanner {
    scan() {}
}

class Fax {
    fax() {}
}

// Звичайний принтер
class SimplePrinter extends Printer {
    print() {}
}

// Многофункціональний принтер
class MultiFunctionPrinter extends Printer {
    print() {}
}

// Через те що JS не підтримує функціонал інтерфейсів, у наступному рядки ми з'єднуємо усі інтерфейси, які були визначені вишче

Object.assign(MultiFunctionPrinter.prototype, {
    scan() {},
    fax() {},
});
