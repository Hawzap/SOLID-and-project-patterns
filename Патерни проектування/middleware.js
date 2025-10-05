class ChatRoom {
    showMessage(user, message) {
        console.log(`${user.getName()}: ${message}`);
    }
}

class User {
    constructor(name, chatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatRoom.showMessage(this, message);
    }
}

const chatRoom = new ChatRoom();

const user1 = new User("Оля", chatRoom);
const user2 = new User("Ігор", chatRoom);

user1.send("Привіт!");
user2.send("Привіт, Оля!");
