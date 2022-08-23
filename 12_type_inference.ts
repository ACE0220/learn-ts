(() => {
    /**
     * 类型推导
     */

    let str = 'hf'; // 会自动推导str的类型为string
    // str = 4856; // 报错

    /**
     * 类型别名
     */

    type s = string;
    let str1:s = 'hf1'


    // 支持联合类型
    type sn = string | number;
    let num: sn = 100;

    type cb = () => string

    const fn:cb = () => 'hf2'
    console.log(fn());

    // 类型限定
    type T = 'off' | 'on';
    let str2: T = 'on';
    
})()