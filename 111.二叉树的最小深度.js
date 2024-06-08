/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
    const queue = []
    if(root) queue.push(root);
    let depth = 0
    while(queue.length){
        let size = queue.length;
        depth++
        while(size--){
            const node = queue.shift()
            //当左右节点为空时，为叶子节点
            if(node.left === null && node.right===null){
                return depth
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return depth
};
// @lc code=end

