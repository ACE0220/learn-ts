
(() => {
    /**
     * 03 接口和对象类型
     */

    // 接口同名的情况下会把属性合并
    interface A {
        name: string
    }

    interface A {
        age: number
    }

    let obj: A = {
        name: 'myname',
        age: 18
    }
    console.log(obj);


    // 可选式操作符
    interface Person {
        name: string,
        age?: number
    }

    let p: Person = {
        name: 'person name',
        age: 18, // age是可选的，无论有无都不会报错
    }

    // 后台返回字段超过我们预想的时候可以这样处理
    interface Person1 {
        name: string,
        age?: number,
        [key: string]: any,
    }

    let p1: Person1 = {
        name: 'p1', // name属性必须存在
        abc: 20, // 这里可以放任意属性
    }


    // 限定所有属性的类型，可以使用联合类型
    interface Person2 {
        name: string,
        age: number,
        [key: string]: string | number, // 这里限定了所有属性类型，一般是使用any的
    }

    let p2: Person2 = {
        name: 'p2', // name属性必须存在
        age: 20,
        abc: 20, // 这里可以放string或number的类型
    }


    // 只读类型readonly
    interface Person3 {
        readonly name: string,
        age: number,
        [key: string]: any,
    }

    let p3: Person3 = {
        name: 'p3', // name属性必须存在
        age: 20,
        abc: 20, // 这里可以放string或number的类型
    }

    // p3.name = 'p33' /**对name赋值会报错 */

    // 在接口定义函数
    interface Person4 {
        name: string,
        age: number,
        cb(): number, // 接口定义函数
        [key: string]: any,
    }

    const p4: Person4 = {
        name: 'p4',
        age: 20,
        cb(): number {
            return 5;
        }
    }

    // interface组合使用

    interface C {
        name: string
    }

    interface D extends C {
        age: number
    }

    let p5: D = {
        name: 'p5',
        age: 20
    }
})()


















