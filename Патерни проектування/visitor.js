class Book {
    accept(visitor) {
        visitor.visitBook(this);
    }

    getName() {
        return "Книга";
    }
}

class DVD {
    accept(visitor) {
        visitor.visitDVD(this);
    }

    getName() {
        return "DVD диск";
    }
}

class Visitor {
    visitBook(book) {}
    visitDVD(dvd) {}
}

class PriceVisitor extends Visitor {
    visitBook(book) {
        console.log(`Встановлюю ціну для ${book.getName()}: 100 грн`);
    }

    visitDVD(dvd) {
        console.log(`Встановлюю ціну для ${dvd.getName()}: 200 грн`);
    }
}

// Використання
const items = [new Book(), new DVD()];
const priceVisitor = new PriceVisitor();

items.forEach((item) => item.accept(priceVisitor));
