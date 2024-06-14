// 防抖 规定时间内只触发一次 重新触发时重新计时

function dobounce(fn,ms=500){
    let timer = null;
    return function(){
        const context = this;
        const args = arguments;
        //有计时器，则还在触发时间内，清空重新计时
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },ms)
    }
}

//节流 规定时间内 不再触发
function throttle(fn,ms=500){
    let timer = null;
    return function(){
        const context = this;
        const args = arguments;
        // 没有计时器时，则可以重新触发函数
        if(!timer){
            timer = setTimeout(()=>{
                // 运行时把timer置空
                timer = null;
                fn.apply(context,args)
            },ms)
        }
    }
}