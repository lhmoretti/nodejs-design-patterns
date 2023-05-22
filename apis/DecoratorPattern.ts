interface Coffee {
    getCost(): number;
    getDescription(): string;
}

class SimpleCoffee implements Coffee {
    getCost() {
        return 10;
    }

    getDescription() {
        return 'Simple coffee';
    }
}

class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) { }

    getCost() {
        return this.coffee.getCost();
    }

    getDescription() {
        return this.coffee.getDescription();
    }
}

class MilkCoffee extends CoffeeDecorator {
    getCost() {
        // return super.getCost(); 
        // Or:
        return 5 + 2;
    }

    getDescription() {
        return super.getDescription() + ', milk';
    }
}

const coffee = new SimpleCoffee();
console.log(coffee.getCost()); // 10
console.log(coffee.getDescription()); // Simple coffee

const milkCoffee = new MilkCoffee(coffee);
console.log(milkCoffee.getCost()); // 12
console.log(milkCoffee.getDescription()); // Simple coffee, milk