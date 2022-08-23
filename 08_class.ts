(() => {

    /**
     * 修饰符 public private protected
     * public: 公共，内外部都可以访问，如果不带修饰符默认就是public
     * private: 私有，类内部可访问，子类不可访问
     * protected：私有，类内部和子类可访问
     */

    // 类的定义
    class Person {
        public name: string
        protected age: number;
        private sub: boolean = false; // 当给了默认值，可以先不赋值
        static staticProperty: string = '12343546'
        constructor(name: string, age: number, sub?: boolean) {
            this.name = name;
            this.age = age;
            // this.sub = sub;
        }

        // 静态方法只能访问静态属性,静态方法之间可以互相调用
        static run() {
            console.log(this.staticProperty);
            // console.log(this.age); /** 会报错 */
        }
        static dev() {
            this.run();
        }


    }

    let p = new Person('zf', 18);
    console.log(p.name);
    // console.log(p.sub); /** sub使用了private修饰符，外部无法访问 */
    // console.log(p.age); /** age使用了protected修饰符，外部无法访问 */

    class Man extends Person {
        constructor() {
            super('man', 30);
            console.log(this.name); // name是public的,可以访问
            console.log(this.age); // age是protected的,子类可以访问到
            // console.log(this.sub); /** sub是private，子类不可访问 */
            
        }
    }

    /**
     * 通过interface约束类
     */

    interface Person1 {
        run(type: boolean): boolean
    }

    interface Person2 {
        set():void
    }

    class Man1 implements Person1, Person2 {
        set(): void {
            throw new Error("Method not implemented.");
        }
        run(type: boolean): boolean {
            return type;
        }
    }


})()