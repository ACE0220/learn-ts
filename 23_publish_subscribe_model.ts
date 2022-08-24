interface EventNet {
    on: (name: string, fn: Function) => void,
    emit: (name: string, ...args: Array<any>) => void,
    off: (name: string, fn: Function) => void,
    once: (name: string, fn: Function) => void,
}

interface List {
    [key:string]:Array<Function> 
}

class Dispatch implements EventNet {
    list: List
    constructor() {
        this.list = {}
    }
    on(name: string, fn: Function) {
        const callback = this.list[name] || [];
        callback.push(fn);
        this.list[name] = callback;
    }
    emit(name: string, ...args: Array<any>) {
        let eventList = this.list[name];
        if(eventList) {
            eventList.forEach(ev => {
                ev.apply(this, args)
            })
        } else {
            console.error(`名称错误${name}`)
        }
    }
    off(name: string, fn: Function) {
        let eventList = this.list[name];
        if(eventList && fn) {
            let index = eventList.findIndex(fns => fns === fn);
            eventList.splice(index, 1);
        }
    }
    once(name: string, fn: Function) {
        let de = (...args: Array<any>) => {
            fn.apply(this, args);
            this.off(name, de)
        }
        this.on(name, de);
    }
}

const o = new Dispatch();

o.on('post', (...args: Array<any>) => {
    console.log('post1');
})

const fn = (...args: Array<any>) => {
    console.log('post2');
}
o.on('post', fn)

o.on('get', () => {
    console.log('get1');
})

o.emit('post', 1, false, {name: 'hf'})

o.off('post', fn)
console.log('fn off');
o.emit('post', 1, false, {name: 'hf'})
console.log('fn once');
o.once('post',fn);
o.emit('post', 1, false, {name: 'hf'})
console.log('fn once end');
o.emit('post', 1, false, {name: 'hf'})
