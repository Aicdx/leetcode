/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
    /*
    思路 用两个栈维护
    当需要出栈时，把栈1的值 入栈到栈2，这时栈2便是倒序了 出列的时候栈2出栈
    注意：需要栈2的值为空时才能入到栈2，不然会打乱队列顺序
    */ 
    stack1: number[];
    stack2: number[];
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }
    push(x: number): void {
        this.stack1.push(x)
    }

    pop(): number {
        if(this.stack2.length===0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop()as number)
            }
        }
        return this.stack2.pop() as number
    }

    peek(): number {
        if(this.stack2.length===0){
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop()as number)
            }
        }
        return this.stack2[this.stack2.length-1]
    }

    empty(): boolean {
        return !this.stack1.length && !this.stack2.length
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

