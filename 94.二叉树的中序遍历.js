/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    // const res = []
    // const ds = function(root){
    //     if(root === null) return;
    //     ds(root.left);
    //     res.push(root.val)
    //     ds(root.right)
    // }
    // ds(root)
    // return res
    // 入栈 左 -> 右
    // 出栈 左 中 右
    const res = []
    const stack = []
    let cur = root
    while(stack.length || cur){
        if(cur){
            stack.push(cur)
            //左
            cur = cur.left
        }else{
            cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
    }
    return res
};
// @lc code=end

