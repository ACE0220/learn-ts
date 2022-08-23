(() => {
    /**
     * never类型表示不应该存在的状态
     */

    type bbb = string & number; // 会推断成never类型

    // 一般以下函数返回never类型
    function error(message: string): never {
        throw new Error(message)
    }

    function loop(): never {
        while (true) {

        }
    }

    interface A {
        type: '保安'
    }

    interface B {
        type: '草莓'
    }

    type All = A | B;
    function type(val: All) {
        switch (val.type) {
            case '保安':
                break;
            case '草莓':
                break;
            default:
                const check:never = val;
                break;
        }
    }
})()