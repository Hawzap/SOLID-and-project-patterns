class CPU {
    freeze() {
        console.log("CPU: заморожую операції");
    }
    jump(position) {
        console.log(`CPU: переходжу на адресу ${position}`);
    }
    execute() {
        console.log("CPU: виконую інструкції");
    }
}

class Memory {
    load(position, data) {
        console.log(`Memory: завантажую ${data} у позицію ${position}`);
    }
}

class HardDrive {
    read(lba, size) {
        console.log(`HardDrive: читаю ${size} байт з LBA ${lba}`);
        return "дані ОС";
    }
}

class ComputerFacade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    start() {
        console.log("Запуск комп’ютера");
        this.cpu.freeze();
        const data = this.hardDrive.read(0, 1024);
        this.memory.load(0, data);
        this.cpu.jump(0);
        this.cpu.execute();
        console.log("Комп’ютер готовий до роботи");
    }
}

const computer = new ComputerFacade();
computer.start();
