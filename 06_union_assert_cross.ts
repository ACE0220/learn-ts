(() => {
    /**
     * 联合类型、交叉类型、类型断言
     */


    /**
     * 联合类型
     */

    // 这时既可以是手机号，也可以是座机号
    let phone:number | string = 17744445555;
    phone = '010-11112222'

    let fn = function(type: number | boolean):boolean {
        return !!type;
    }
    console.log(fn(1));
    console.log(fn(false));

    /**
     * 交叉类型
     */
    interface People {
        name: string,
        age: number
    }
    interface Man{
        sex: number
    }
    const someman = (man: People & Man): void => {
        console.log(man);
    }
    someman({
        name: 'someman',
        age: 18,
        sex: 1
    });
    
    /**
     * 类型断言 as
     */
    // 类型断言不能滥用，能骗过编译器，但是不能避免运行时的问题
    let fn1 = function(num: number | string):void {
        console.log((num as string).length);
    }
    fn1(12345)

    // 类型断言的滥用
    interface A{
        run: string
    }
    interface B{
        build: string
    }
    let fn2 = (type: A | B) => {
        console.log((type as A).run); // undifined
    }
    fn2({
        build: '123'
    });


    // 将window断言为any类型
    // (window as any).abc = 123; // 执行环境不是浏览器会报错，看看就行


    const fn3 = (type: any):boolean => {
        return type as boolean;
    }
    console.log(fn3(1)); // 1
    
})()