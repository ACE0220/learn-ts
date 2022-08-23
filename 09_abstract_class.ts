(() => {
    /**
     * 抽象类
     */

    abstract class A {
        name: string
        constructor(name: string) {
            this.name = name;
        }

        abstract getName():string // 这里采用了abstract修饰符，所以B类要实现这个方法
        setName(name: string) { // 这个方法B类可以调用，实例也可以调用
            this.name = name;
        }
    }

    // new A('zf'); /** 抽象类不能直接实例化 */

    class B extends A {
        constructor() {
            super('hf')
        }
        getName(): string {
            return this.name;
        }
    }

    let b = new B();
    console.log('B类的实例b调用了setName');
    b.setName('hf2');
    console.log(b.getName());
    
})()