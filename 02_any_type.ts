(() => {
    /**
     * 02 任意类型
     */

    // any类型
    let anys: any = 'string1'
    anys = 18;
    anys = {};
    anys = [];
    anys = true;

    // unknown类型比any类型更安全
    let anys1: unknown = { a: 123 };
    // unknown.a; /**这里不存在a属性 */

    // unknown类型可赋值对象只有unknown和any
    let anys2: unknown = { a: 123 };
    let str2: string = '2222';
    anys2 = str2;
    console.log(anys2);
})()




