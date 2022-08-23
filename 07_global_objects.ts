(() => {

    /**
     * 在全局作用域都存在的内置对象，这种类似于java的包装类，触类旁通
     */


    // 声明一个正则,内置对象RegExp
    const regexp: RegExp = /\w\d\s/;


    // Date类型
    const date:Date = new Date();

    // Error
    const error:Error = new Error('错误');

    // Boolean
    let b:Boolean = new Boolean(1);
    console.log(b.valueOf());

    // Number
    let n:Number = new Number(10);
    console.log(n);
    console.log(n.valueOf());

    // String
    let s:String = new String(100);
    console.log(s);
    console.log(s.valueOf());

    // dom操作, 这里的操作去相应html能看到打印结果和效果
    const list:NodeList = document.querySelectorAll('#list li');
    console.log(list);
    const body:HTMLElement = document.body;
    console.log(body);
    const div:HTMLDivElement = document.createElement('div');
    div.setAttribute('id', 'newDIV');
    div.textContent = 'I am newDIV, created by JavaScript Code'
    document.body.appendChild(div);

    document.body.addEventListener('click', (e: MouseEvent) => {
        console.log(e);
    })


    // promise, 约束返回number类型
    function promise(): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            resolve(1)
        })
    }

    promise().then(res => {
        console.log(res);
        
    })

    
})()