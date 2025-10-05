class AbstractGame {
    play() {
        this.start();
        this.playGame();
        this.end();
    }

    start() {
        throw new Error("Метод start() повинен бути реалізований");
    }

    playGame() {
        throw new Error("Метод playGame() повинен бути реалізований");
    }

    end() {
        throw new Error("Метод end() повинен бути реалізований");
    }
}

class Football extends AbstractGame {
    start() {
        console.log("Футбол: Початок гри");
    }
    playGame() {
        console.log("Футбол: Гра триває");
    }
    end() {
        console.log("Футбол: Гру завершено");
    }
}

class Basketball extends AbstractGame {
    start() {
        console.log("Баскетбол: Початок гри");
    }
    playGame() {
        console.log("Баскетбол: Гра триває");
    }
    end() {
        console.log("Баскетбол: Гру завершено");
    }
}

const football = new Football();
football.play();

const basketball = new Basketball();
basketball.play();
