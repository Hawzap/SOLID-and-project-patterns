class Notifier {
    send(message) {
        throw new Error("Метод send() повинен бути реалізований у підкласі");
    }
}

class EmailNotifier extends Notifier {
    send(message) {
        console.log(`Надсилаю Email: ${message}`);
    }
}

class NotifierDecorator extends Notifier {
    constructor(notifier) {
        super();
        this.notifier = notifier;
    }

    send(message) {
        this.notifier.send(message);
    }
}

class SMSNotifier extends NotifierDecorator {
    send(message) {
        super.send(message);
        console.log(`Надсилаю SMS: ${message}`);
    }
}

class PushNotifier extends NotifierDecorator {
    send(message) {
        super.send(message);
        console.log(`Надсилаю Push-повідомлення: ${message}`);
    }
}

const email = new EmailNotifier();

const emailAndSMS = new SMSNotifier(email);
const emailSMSAndSlack = new PushNotifier(emailAndSMS);

emailSMSAndSlack.send("Вітаю, у вас нове повідомлення!");
