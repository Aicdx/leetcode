//call
Function.prototype.myCall = function(context){
    context = context || window
    const funcId = Symbol('funcId');
    context[funcId] = this
    const args = [...arguments].slice(1)
    const reslut = context[funcId](...args);
    delete context[funcId];
    return reslut
}
//apply
Function.prototype.MyApply = function(context){
    context = context || globalThis;
    const funcId = Symbol('funcId');
    context[funcId] = this
    const reslut = arguments[1] ?context[funcId](...arguments[1]): context[funcId]()
    delete context[funcId]
    return reslut;
}
//bind
Function.prototype.MyBind = function(){
    const _this = this
    const args= [...arguments];
    const newThis = args.shift()
    return function(){
        return _this.MyApply(newThis,args)
    }
}
const val = '123'
const obj = {
    val :'456'
}

function myFn(a,b,c,d,e){
    console.log(this.val,a,b,c,d,e)
}
// myFn(1,2,3,4,5)
// myFn.call(obj,1,2,3,4,5)
// myFn.myCall(obj,1,2,3,4,5)
// myFn.apply(obj,[1,2,3,4,5])
// myFn.MyApply(obj,[1,2,3,4,5])
myFn.MyBind(obj,1,2,3,4,5)()
// myFn.bind(obj,1,2,3,4,5)()