(function () {
    /**
     * 在全局作用域都存在的内置对象，这种类似于java的包装类，触类旁通
     */
    // 声明一个正则,内置对象RegExp
    var regexp = /\w\d\s/;
    // Date类型
    var date = new Date();
    // Error
    var error = new Error('错误');
    // Boolean
    var b = new Boolean(1);
    console.log(b.valueOf());
    // Number
    var n = new Number(10);
    console.log(n);
    console.log(n.valueOf());
    // String
    var s = new String(100);
    console.log(s);
    console.log(s.valueOf());
    // dom操作, 这里的操作去相应html能看到打印结果和效果
    var list = document.querySelectorAll('#list li');
    console.log(list);
    var body = document.body;
    console.log(body);
    var div = document.createElement('div');
    div.setAttribute('id', 'newDIV');
    div.textContent = 'I am newDIV, created by JavaScript Code';
    document.body.appendChild(div);
    document.body.addEventListener('click', function (e) {
        console.log(e);
    });
    // promise, 约束返回number类型
    function promise() {
        return new Promise(function (resolve, reject) {
            resolve(1);
        });
    }
    promise().then(function (res) {
        console.log(res);
    });
})();
