/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    //误区，不是右节点，而是右视图，即为每层最后一个节点
    const res = [],queue= []
    if(root) queue.push(root);
    while(queue.length){
        let size = queue.length
        while(size --){
            const node = queue.shift()
            if(!size){
                res.push(node.val)
            }
            node.left&& queue.push(node.left)
            node.right&& queue.push(node.right)
        }
    }
    return res
};
// @lc code=end

