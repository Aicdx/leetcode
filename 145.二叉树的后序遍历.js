/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
    // 递归
    // const res = []
    // const ds = function(root){
    //     if(root === null) return;
    //     ds(root.left);
    //     ds(root.right);
    //     res.push(root.val)
    // }
    // ds(root)
    // return res

    // 迭代
    // 入栈 左 -> 右
    // 出栈 中 -> 右 -> 左 翻转后为 左右中
    // if(!root) return []
    // const res = []
    // const stack = [root]
    // let cur = null
    // while(stack.length){
    //     cur = stack.pop()
    //     res.push(cur.val)
    //     //左节点入栈
    //     cur.left&&stack.push(cur.left)
    //     //右节点入栈
    //     cur.right&&stack.push(cur.right)
    // }
    // return res.reverse()
    // 统一方法
    const res = []
    const stack = []
    if(root) stack.push(root);
    while(stack.length){
        const node = stack.pop()
        if(!node){
            res.push(stack.pop().val)
            continue;
        }
        //后序 左右中 
        stack.push(node)
        stack.push(null)
        node.right&&stack.push(node.right)
        node.left&&stack.push(node.left)
    }
    return res
};
// @lc code=end

