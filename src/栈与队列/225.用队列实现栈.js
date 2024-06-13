/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
    // 定义队列
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // 直接入队尾
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    //  -----------------------
    //  头      <--          尾
    //  -----------------------
    // 当需要pop时，是需要把尾巴最后一个元素弹出
    // 但是队列只能头先出，所以把 len -1 的元素都弹出后重新加入
    // 把最后一个元素弹出则为需要的队尾
    let size = this.queue.length - 1;
    while(size--){
        this.queue.push(this.queue.shift())
    }
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const x = this.pop()
    this.queue.push(x)
    return x;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

