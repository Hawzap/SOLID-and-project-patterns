class ModernChair {
    sit() {
        return "Сиджу на сучасному стільці";
    }
}

class ModernSofa {
    lie() {
        return "Лежу на сучасному дивані";
    }
}

class VictorianChair {
    sit() {
        return "Сиджу на вікторіанському стільці";
    }
}

class VictorianSofa {
    lie() {
        return "Лежу на вікторіанському дивані";
    }
}

class FurnitureFactory {
    createChair() {}
    createSofa() {}
}

class ModernFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new ModernChair();
    }
    createSofa() {
        return new ModernSofa();
    }
}

class VictorianFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new VictorianChair();
    }
    createSofa() {
        return new VictorianSofa();
    }
}
