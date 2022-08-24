(() => {
    type Person = {
        name: string,
        age: number,
        text: string
    }

    const proxy = (object: any, key: any) => {
        return new Proxy(object, {
            get(target, prop, receiver) {
                console.log('=========>get', prop);
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                console.log('=========>set', prop);
                
                return Reflect.set(target, prop, value, receiver)
            }
        })
    }

    const logAccess = <T>(obj: T, key: keyof T) => {
        return proxy(obj, key);
    }

    let man:Person = logAccess({
        name: 'hf',
        age: 22,
        text: 'testtestte4setsdkjdfjgk'
    }, 'name')
    console.log(man.name);


    let man2 = logAccess({
        name: 'man2',
        id: 1
    }, 'id')
    console.log(man2.id);
    
})()