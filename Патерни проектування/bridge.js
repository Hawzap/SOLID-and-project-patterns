// --- Абстракція ---
class RemoteControl {
    constructor(device) {
        this.device = device;
    }

    togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
            console.log("Вимикаю пристрій...");
        } else {
            this.device.enable();
            console.log("Вмикаю пристрій...");
        }
    }
}

class AdvancedRemoteControl extends RemoteControl {
    mute() {
        this.device.setVolume(0);
        console.log("Звук вимкнено");
    }
}

class Device {
    isEnabled() {}
    enable() {}
    disable() {}
    setVolume(value) {}
}

class TV extends Device {
    constructor() {
        super();
        this.on = false;
        this.volume = 50;
    }

    isEnabled() {
        return this.on;
    }
    enable() {
        this.on = true;
    }
    disable() {
        this.on = false;
    }
    setVolume(value) {
        this.volume = value;
    }
}

class Radio extends Device {
    constructor() {
        super();
        this.on = false;
        this.volume = 30;
    }

    isEnabled() {
        return this.on;
    }
    enable() {
        this.on = true;
    }
    disable() {
        this.on = false;
    }
    setVolume(value) {
        this.volume = value;
    }
}

const tv = new TV();
const remote = new RemoteControl(tv);

const radio = new Radio();
const advRemote = new AdvancedRemoteControl(radio);
