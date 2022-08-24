(() => {

    const wacher: ClassDecorator = (target: Function) => {
        target.prototype.getName = <T>(name:T):T => {
            return name;
        }
    }

    @wacher
    class A {

    }

    @wacher
    class B {

    }

    let a = new A();
    console.log((<any>a).getName('123123'));

    let b = new B();
    console.log((<any>b).getName('456456'));

    // 如果@watchr要传参，需要把watcher定义成高阶函数
    const wacher1 = <T>(name: T): ClassDecorator => {
        return (target: Function) => {
            target.prototype.getName = () : T => {
                return name;
            }
        }
    }

    const log:ClassDecorator = (target:Function) => {
        target.prototype.a = 123;
    }


    // 组合式装饰器
    @log
    @wacher1<number>(20)
    class C {

    }
    let c = new C();
    console.log((<any>c).getName());
    console.log((<any>c).a);


    /**
     * 属性装饰器
     */

    const pd: PropertyDecorator = (...args) => {
        console.log(args);
    } 

    const md: MethodDecorator = (...args) => {
        console.log(args);
    } 

    const pad: ParameterDecorator = (...args) => {
        console.log(args);
    }

    class D {
        @pd
        name:string = 'd'
        sex:number = 0
        age:number = 0
        constructor(){}
        @md
        getName() {
            return this.name;
        }
        setInfo(@pad name: string, @pad sex: number, @pad age: number) {
            this.name = name;
            this.sex = sex;
            this.age = age;
        }
    }
    
    let d = new D();

})()