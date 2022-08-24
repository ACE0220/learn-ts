/**
 * 一个文件带有export\import会被当成一个模块，不带有这些声明的会全局可见
 */

// 避免全局污染一个是可以通过export解决
// const a = 2;
// module.exports = a; // cjs
// export const a = 2; // esm

// 另外一个是通过命名空间解决
namespace A {
    export const a = 1;
}

// 命名空间编译以后就是包装成一个对象
// var A;
// (function(A) {
//     A.a = 1;
// })(A || A = {});

console.log(A.a);


/**
 * 嵌套命名空间
 */

namespace B {
    export namespace C {
        export const D = 5;
    }
}

console.log(B.C.D);

/**
 * 抽离命名空间
 */

export namespace E {
    export const a = 1;
}

// 其他ts文件通过
// import {E} from './18_namespace.ts'
// 可以获取到E.a

/**
 * 简化命名空间
 */

// import BC = B.C;
// console.log(BC.D);


/**
 * 命名空间合并
 */

// 命名空间E会合并a,b属性
 export namespace E {
    export const b = 2;
}





