(() => {

    let arr: number[] = [1, 2, 3, 4];
    // let arr1:number[] = ['arr']; /**报错 */
    let arr2: boolean[] = [true, false];
    let arr3: any[] = [true, 1, 'shg', [], {}];


    // 泛型约束
    let arr4: Array<number> = [1, 2, 3, 4];
    let arr5: Array<boolean> = [true, false];
    let arr6: Array<string> = ['true', 'false'];

    // 多维数组
    let arr7: number[][] = [[1, 2, 4], [3, 5, 7]]
    let arr8: Array<Array<number>> = [[1, 2, 4], [3, 5, 7]];
    let arr9: Array<Array<string>> = [['1', '2', '4'], ['3', '5', '7']];

    // 类数组
    function Arr(...args: any): void {
        let arr: IArguments = args;
        console.log(arr);
    }
    Arr(1, 2, 3)
})()




