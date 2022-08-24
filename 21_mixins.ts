(() => {
    interface Name {
        name: string
    }
    interface Age {
        age: number
    }
    interface Sex {
        sex: number
    }

    let a: Name = { name: 'a' }
    let b: Age = { age: 18 }
    let c: Sex = { sex: 1 }


    let d = Object.assign(a, b, c);
    console.log(d);

    /**
     * 类的混入
     */

    class A {
        type: boolean
        constructor() {
            this.type = false;
        }
        changeType() {
            this.type = !this.type;
        }
    }

    class B {
        name: string
        constructor() {
            this.name = '';
        }
        getName() {
            return this.name;
        }
    }

    class C implements A, B {
        type:boolean = false;
        name:string = '';
        changeType() {}
        getName(): string {
            return this.name;
        }
    }

    mixins(C, [A,B])

    function mixins(currentClass: any, itemClass: any[]) {
        itemClass.forEach(item => {
            Object.getOwnPropertyNames(item.prototype).forEach(name => {
                console.log(name);  
                currentClass.prototype[name] = item.prototype[name]
            })
        })
    }

    let ccc = new C();
    ccc.changeType();
    console.log(ccc.type);
    
})()