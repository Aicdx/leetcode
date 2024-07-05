/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
    // node[0] 不偷左节点 right[0]不偷右节点
     // node[1] 偷左节点 right[1]偷右节点
    const dp = node =>{
        if(!node){
            return [0,0]
        }
        const left = dp(node.left)
        const right = dp(node.right)

        // 不偷当前节点，左右子节点都可以偷或不偷，取最大值
        const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        //偷当前节点，左右子节点只能不偷
        const Do = node.val + left[0]+right[0]
        return [DoNot,Do]
    }
    const res = dp(root)
    return Math.max(...res)
};
// @lc code=end

