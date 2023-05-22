abstract class AbstractClass {
    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperations1();
        this.baseOperation2();
        this.hook1();
        this.requiredOperation2();
        this.baseOperation3();
        this.hook2();
    }

    protected baseOperation1(): void {
        console.log("`baseOperation1`");
    }

    protected baseOperation2(): void {
        console.log("`baseOperation2`");
    }

    protected baseOperation3(): void {
        console.log("`baseOperation3`");
    }

    protected abstract requiredOperations1(): void;

    protected abstract requiredOperation2(): void;

    protected hook1(): void { }

    protected hook2(): void { }
}

class ConcreteClass1 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log("`requiredOperations1` of ConcreteClass1");
    }

    protected requiredOperation2(): void {
        console.log("`requiredOperation2` of ConcreteClass1");
    }
}

class ConcreteClass2 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log("`requiredOperations1` of ConcreteClass2");
    }

    protected requiredOperation2(): void {
        console.log("`requiredOperation2` of ConcreteClass2");
    }

    protected hook1(): void {
        console.log("`hook1` of ConcreteClass2");
    }
}

console.log('Same client code can work with different subclasses:');
let class1 = new ConcreteClass1();
class1.templateMethod();

console.log('');

let class2 = new ConcreteClass2();
class2.templateMethod();