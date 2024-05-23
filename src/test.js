function dobounce(fn,ms){
    let timer = null
    return function(...args){
        const context = this
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(context,...args)
        },ms)
    }
}

function throttle(fn,ms){
    let timer = null
    return function(...args){
        const context = this
        if(!timer){
            timer = setTimeout(()=>{
                timer = null
                fn.apply(context,...args)
            },ms)
        }
    }
}

console.log('start')