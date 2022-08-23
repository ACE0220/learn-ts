(() => {
    let s:symbol = Symbol('hf');
    let n:symbol = Symbol('hf');

    console.log(s === n); // s 和 n 指针指向的内存地址不同，所以是false


    let obj = {
        [n]: 'value',
        [s]: '草莓',
        name: 'hhhhh',
        sex: '男'
    }

    for(let key in obj) {
        console.log(key); // symbol类型的key不会打印出来
    }

    // 通过getOwnPropertySymbols读取symbol
    console.log(Object.getOwnPropertySymbols(obj));
    
    // 通过Reflect可以获取完整属性
    console.log(Reflect.ownKeys(obj));
    
})()