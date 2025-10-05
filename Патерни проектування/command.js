class Light {
    on() {
        console.log("Світло увімкнено");
    }
    off() {
        console.log("Світло вимкнено");
    }
}

class Command {
    execute() {}
}

class TurnOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.on();
    }
}

class TurnOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.off();
    }
}

class RemoteControl {
    submit(command) {
        command.execute();
    }
}

const light = new Light();

const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);

const remote = new RemoteControl();

remote.submit(turnOn); // Світло увімкнено
remote.submit(turnOff); // Світло вимкнено
