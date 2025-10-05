class Editor {
    constructor() {
        this.content = "";
    }

    type(words) {
        this.content += words;
    }

    getContent() {
        return this.content;
    }

    save() {
        return new EditorMemento(this.content);
    }

    restore(memento) {
        this.content = memento.getContent();
    }
}

class EditorMemento {
    constructor(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }
}

class History {
    constructor() {
        this.states = [];
    }

    push(memento) {
        this.states.push(memento);
    }

    pop() {
        return this.states.pop();
    }
}

const editor = new Editor();
const history = new History();

editor.type("Привіт, ");
history.push(editor.save());

editor.type("світ!");
history.push(editor.save());

console.log(editor.getContent()); // Привіт, світ!

editor.restore(history.pop());
console.log(editor.getContent()); // Привіт,

editor.restore(history.pop());
console.log(editor.getContent()); // (порожньо)
