/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function(root) {
    const res=[],queue = []
    if(root) queue.push(root);
    while(queue.length){
        const curRes = []
        let size = queue.length;
        while(size--){
            const node = queue.shift()
            curRes.push(node.val)
            node.left&& queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(curRes)
    }
    return res.reverse()
};
// @lc code=end

