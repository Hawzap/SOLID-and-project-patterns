class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify(data) {
        this.observers.forEach((observer) => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} отримав повідомлення: ${data}`);
    }
}

const subject = new Subject();

const observer1 = new Observer("Спостерігач 1");
const observer2 = new Observer("Спостерігач 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Нове повідомлення!");

// Вивід:
// Спостерігач 1 отримав повідомлення: Нове повідомлення!
// Спостерігач 2 отримав повідомлення: Нове повідомлення!
