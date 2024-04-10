/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
    const stack:number[] = []
    const len:number = temperatures.length
    //数组定长并赋值0，后续就不用处理不出栈的温度了
    const res:number[] = (new Array(len)).fill(0)
    /*
    若栈为空，温度索引入栈 
    若栈不为空，判断当前温度是否大于栈顶温度 
    若大于，则弹出，记录当前索引与栈顶的差值
    */
    for(let i=0;i<len;i++){
        while(stack.length && temperatures[i]> temperatures[stack[stack.length-1]]){
            const top = stack.pop() as number
            res[top] = i-top
        }
        stack.push(i)
    }
    return res
};
// @lc code=end

