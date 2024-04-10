/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
    protected stack:number[] = [];
    push(val: number): void {
        this.stack.push(val)
    }

    pop(): void {
       this.stack.pop() 
    }

    top(): number {
        return this.stack[this.stack.length-1]
    }

    getMin(): number {
        let minValue = Infinity
        for(let i=0;i<this.stack.length;i++){
            if(this.stack[i]<minValue){
                minValue = this.stack[i]
            }
        }
        return minValue
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

