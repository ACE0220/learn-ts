(() => {
    /**
     * 定义一个类型，如果是数组类型就返回数组元素的类型，否在传入什么类型就返回什么类型
     */
    type TYPE<T> = T extends Array<any> ? T[number] : T;
    type A = TYPE<string[]>
    type B = TYPE<boolean>

    // 通过infer简化
    type TYPE1<T> = T extends Array<infer U> ? U : T;
    type C = TYPE<string[]>
    type D = TYPE<boolean>


    /**
     * infer类型提取
     */

    
    type Arr = ['a', 'b', 'c'];

    // 提取头部元素
    type First<T extends any[]> = T extends [infer one, ...any[]] ? one: [];
    type a = First<Arr>;

    // 提取尾部元素
    type Last<T extends any[]> = T extends [...any[],infer last] ? last: [];
    type b = Last<Arr>

    // 不提取最后一个元素
    type Pop<T extends any[]> = T extends [...infer Rest, unknown] ? Rest: [];
    type c = Pop<Arr>

    // 第一个不要了
    type Shift<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest: [];
    type d = Shift<Arr>

    /**
     * infer递归
     */

    type Arr1 = [1,2,3,4]

    type ReverArr<T extends any[]> = T extends [infer First, ...infer rest] ? [...ReverArr<rest>,First] : T; 

    type Arr2 = ReverArr<Arr1>
})()