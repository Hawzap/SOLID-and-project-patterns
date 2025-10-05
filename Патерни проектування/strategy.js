class StrategyA {
    execute() {
        console.log("Виконуємо стратегію A");
    }
}

class StrategyB {
    execute() {
        console.log("Виконуємо стратегію B");
    }
}

class Context {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy() {
        this.strategy.execute();
    }
}

const context = new Context();

context.setStrategy(new StrategyA());
context.executeStrategy(); // Виконуємо стратегію A

context.setStrategy(new StrategyB());
context.executeStrategy(); // Виконуємо стратегію B
