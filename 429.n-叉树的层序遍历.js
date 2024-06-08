/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [],queue = []
    if(root) queue.push(root);
    while(queue.length){
        const curRes = []
        let size = queue.length
        while(size--){
            const node = queue.shift()
            curRes.push(node.val)
            //遍历孩子节点加入队列
            for(let i of node.children){
                i && queue.push(i)
            }
        }
        res.push(curRes)
    }
    return res
};
// @lc code=end

