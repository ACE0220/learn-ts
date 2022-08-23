/**
 * 枚举类型
 */

(() => {
    // 早期没有ts的做法
    /** 
    const fn = (type) => {
        if(type === 'red') {
            return red;
        }
    }
    */

    /** 
    let obj = {
        red: 1,
        blue: 2,
    }
    */

    // 默认从0开始
    enum Color {
        red,
        green,
        blue,
    }
    console.log(Color.red);

    // 增长枚举, 自动递增
    enum Color1 {
        red = 1,
        green,
        blue
    }
    console.log(Color1.red, Color1.green);

    enum Color2 {
        red = 1,
        green = 3,
        blue = 5,
        yellow,
    }
    console.log(Color2.yellow);


    // 字符串枚举
    enum Color3 {
        red = 'red',
        // green, 不定义会报错
        blue = 'blue'
    }

    // 异构枚举，但是少用
    enum Color4 {
        aa,
        red = 'red',
        no = 1
    }

    // 接口枚举混合使用
    interface A {
        red: Color2.red
    }

    let obj: A = {
        red: Color2.red
    }

    // const枚举
    const enum ConstTypes {
        success,
        fail
    }

    let code:number = 0;
    if(code === ConstTypes.success) {

    }
    enum ConstTypes1 {
        success,
        fail
    }
    // 反向映射 key->value || value->key，如果value是字符串则无法做反向映射
    let value:number = ConstTypes1.success;
    let key = ConstTypes1[value];
    console.log(key);

})()