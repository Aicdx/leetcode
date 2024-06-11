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

function handleCandies(candies,n){
    const res = new Array(n).fill(0)
    let sum = 1;
    let cur = 0
    while(candies>0){
        if(cur === res.length){
            cur = 0
        }
        res[cur] += sum
        candies -= sum
        if(candies <= sum){
            sum = candies
        }else{
           sum++
        }
        cur++
    }
    return res
}
console.log(handleCandies(21,5))