(() => {

    /**
     * 函数泛型
     */

    function num(a: number, b: number): Array<number> {
        return [a, b];
    }
    num(1, 2);

    // 如果想要一个返回字符串数组的时候，就需要再定义一个返回字符串数组的函数
    function str(a: string, b: string): Array<string> {
        return [a, b]
    }
    str('1', '2');


    // 通过泛型可以解决这个问题
    function genArr<T>(a: T, b: T): Array<T> {
        return [a, b]
    }

    genArr<number>(1, 2);
    genArr<string>('1', '2');
    // 以下两行会自动推导类型
    genArr(1, 2);
    genArr('1', '2');

    // 多种类型的做法
    function sub<T, U>(a: T, b: U): Array<T | U> {
        let arr: Array<T | U> = [a, b];
        return arr;
    }

    sub<number, boolean>(1, false);


    /**
     * 泛型约束
     */


    interface Len {
        length: number
    }

    function getLength<T extends Len>(arg: T) {
        return arg.length;
    }

    // number和boolean没有length属性
    // getLength(1);
    // getLength(false);
    getLength('1234');


    /**
     * keyof约束泛型对象
     */

    // K extend keyof T，keyof会获取T的所有键
    function prop<T, K extends keyof T>(obj: T, key: K) {
        return obj[key]
    }
    let o = {a:1, b:2, c:3};

    prop(o, 'a');
    // prop(o, 'd'); /**由于对象o不存在d属性，所以会报错 */


    /**
     * 泛型类
     */


    class Sub<T> {
        attr: T[] = [];
        add(a:T):T[] {
            this.attr.push(a)
            return this.attr;
        }
    }

    let s = new Sub<number>();
    s.attr = [1,2,3,4]
    console.log(s.add(5));
   
})()