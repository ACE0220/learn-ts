/**
 * 元祖是固定数量的不同类型元素的组合，是数组的变种
 * 好处在于可以把多个元素作为一个单元传递
 * 如果需要返回多个不同类型的值，也可以返回元祖类型
 */


(() => {
    let arr:[number, string] = [1, '1'];
    console.log(arr[0]);

    // arr.push(true); /**类型“boolean”的参数不能赋给类型“string | number”的参数 */
    arr.push(1,2,3,4,5,'zhf');

    let excel:[string, string, number][] = [
        ['title', 'name', 1]
    ];
    console.log(excel);
    
})()

