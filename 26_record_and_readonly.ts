(() => {
    /**
     * 把所有属性都变成只读
     */

    type R<T> = {
        readonly [P in keyof T]: T[P];
    }

    type Person = {
        name: string,
        age: number
    }

    type man = R<Person>  

    /**
     * Record
     */

    type Rec<K extends keyof any, T> = {
        [P in K] : T;
    }

    type key = string | number | symbol;

    type Person1 = {
        name: string,
        age: number,
        text: string
    }

    type K = 'A' | 'B' | 'c';

    type B = Rec<K, Person1>

    let obj: B = {
        A: {
            name: "",
            age: 0,
            text: ""
        },
        B: {
            name: "",
            age: 0,
            text: ""
        },
        c: {
            name: "",
            age: 0,
            text: ""
        }
    }
})()