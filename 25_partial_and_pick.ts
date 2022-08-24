(() => {

    /**
     * partial，把Person每个类型都替换成可选的
     */
    type Person = {
        name: string,
        age: number,
        text: string
    }

    type p = Partial<Person>


    /**
     * pick 可以做类型筛选
     */

    type Person1 = {
        name: string,
        age: number,
        text: string
    }

    type p1 = Pick<Person1, 'age' | 'name'>
})()