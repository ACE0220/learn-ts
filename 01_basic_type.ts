function basic01() {
    return (
        () => {
            /**
             * 01 基本类型
             */
            // 字符串类型
            let str: string = 'TS'
            let muban: string = `web ${str}`;


            // 数字类型
            let num: number = 123;
            console.log(num);

            // 数字类型多种进制
            let inifinityNumber: number = Infinity;
            let decimal: number = 6;
            let hex: number = 0xf01d;
            let binary: number = 0b1010;
            let octal: number = 0o111;


            // 布尔类型
            let b: boolean = true;
            console.log(b);

            // 布尔对象类型
            let c: Boolean = new Boolean(1);
            console.log(c, c.valueOf());


            // 空值类型
            function voidFn(): void {
                console.log('void');
            }

            let un: void = undefined;
            // let nu:void = null; // 开启严格模式下这个会报错

            // null和undefined类型

            //这样写会报错 void类型不可以分给其他类型
            let test: void = undefined
            let num2: string = "1"
            // num2 = test
        }
    )()
}
basic01();