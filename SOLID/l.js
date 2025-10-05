// Тут ми для класу Eagle та Penguin наслідуємо тільки ті класи, функціоналу яких вони відповідають, а специфічні можливості вже додаємо у тих класах, де це потрібно

class Bird {
    sleep() {
        // ...
    }

    eat() {
        // ...
    }
}

class FlyingBird extends Bird {
    fly() {
        // ...
    }
}

class Eagle extends FlyingBird {
    fly() {
        // ...
    }
}

class Penguin extends Bird {
    swim() {
        // ...
    }
}
