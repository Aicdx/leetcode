/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
    // 定义入栈和出栈模拟队列
    this.inStack = []
    this.outStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // 入队列直接入 this.inStack
    this.inStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // 当出栈 存在元素时 直接出栈
    if(this.outStack.length){
        return this.outStack.pop()
    }
    // 否则 全部的入栈 元素加入到出栈队列
    while(this.inStack.length){
        this.outStack.push(this.inStack.pop())
    }
    // 出栈
    return this.outStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const x = this.pop()
    this.outStack.push(x)
    return x;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.inStack.length && !this.outStack.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

