/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    // 递归
    // const res = []
    // const ds = function(root){
    //     if(root === null) return;

    //     res.push(root.val);
    //     ds(root.left);
    //     ds(root.right)
    // }
    // ds(root)
    // return res

    // 迭代
    if(root === null) return []
    const res = []
    const stack = [root];
    let cur = null
    while(stack.length) {
        cur = stack.pop()
        res.push(cur.val);
        cur.right&&stack.push(cur.right)
        cur.left&&stack.push(cur.left)
    }
    return res
};
// @lc code=end

