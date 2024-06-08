/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = []
    const queue = []
    if(root) queue.push(root);
    while(queue.length){
        let size = queue.length
        let curRes = []
        //遍历每一层，当前队列长度就是当前层长度
        while(size--){
            const node = queue.shift()
            curRes.push(node.val)
            //入队列
            node.left && queue.push(node.left)
            node.right&& queue.push(node.right)
        }
        res.push(curRes)
    }
    return res
};
// @lc code=end

