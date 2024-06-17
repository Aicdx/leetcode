/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    //误区：是修改指针
    const queue = []
    if(root) queue.push(root);
    while(queue.length){
        const curRes = []
        let size = queue.length
        while(size--){
            let node = queue.shift()
            if(size){
                // 修改指针指向右侧，即为队列第一个
                node.next = queue[0]
            }
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
        }
    }
    return root
};
// @lc code=end

