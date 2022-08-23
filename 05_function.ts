(() => {
    const fn = function (name: string, age: number) {
        return name + age;
    }

    let a = fn('name1', 18);
    console.log(a);


    // 可选参数和默认参数
    const fn1 = function (name: string, age?: number): string {
        return name + age;
    }
    let b = fn1('name1');
    console.log(b);

    // 用interface约束类型
    interface User {
        name: string,
        age: number
    }
    const fn2 = function(user:User): User {
        return user;
    }
    let c = fn2({name: 'c', age: 18})
    console.log(c);

    // 函数重载,第一二个是重载函数，第三个是执行函数
    function fn3(param1: number):void
    function fn3(param1: string, params2?: number):void
    function fn3(param1: any, params2?: any):any{
        return param1 + params2;
    }
    console.log(fn3(1));
    console.log(fn3('1',2));
})()


