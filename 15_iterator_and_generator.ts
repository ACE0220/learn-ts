(() => {
    /**
     * 迭代器和生成器
     */
    let arr:Array<number> = [4,5,6];

    let it:Iterator<number> = arr[Symbol.iterator]();

    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next()); 


    let set:Set<number> = new Set([1,2,3]);
    let map:Map<string | number, string | number> = new Map();
    map.set('1', 'hh1')
    map.set('1', 'hh2');

    function gen(erg:any) {
        let it:Iterator<any> = erg[Symbol.iterator]();
        let next:any = {done:false};
        while(!next.done) {
            next = it.next();
            if(!next.done) {
                console.log(next);
            }
        }
    }

    // 大部分数组，set，map支持迭代器，但是对象不支持
    gen(arr);
    gen(set);
    gen(map);
    // gen({}); /**会报错 */

    // for of是iterator的语法糖，如果使用for of调用对象也会报错
    for(let item of set) {
        console.log(item);
    }
    for(let item of arr) {
        console.log(item);
    }
    for(let item of map) {
        console.log(item);
    }

    // for in会把key给取出来
    for(let item in arr) {
        console.log(item);
    }


})()