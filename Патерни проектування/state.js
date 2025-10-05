class Context {
    constructor(state) {
        this.setState(state);
    }

    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }

    request() {
        this.state.handle();
    }
}

class State {
    setContext(context) {
        this.context = context;
    }

    handle() {
        throw new Error("Метод handle() повинен бути реалізований у підкласі");
    }
}

class StateA extends State {
    handle() {
        console.log("Стан A обробляє запит");
        this.context.setState(new StateB());
    }
}

class StateB extends State {
    handle() {
        console.log("Стан B обробляє запит");
        this.context.setState(new StateA());
    }
}

const context = new Context(new StateA());

context.request(); // Стан A обробляє запит
context.request(); // Стан B обробляє запит
context.request(); // Стан A обробляє запит
