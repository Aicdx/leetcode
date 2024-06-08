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
    // if(root === null) return []
    // const res = []
    // const stack = [root];
    // let cur = null
    // while(stack.length) {
    //     cur = stack.pop()
    //     res.push(cur.val);
    //     cur.right&&stack.push(cur.right)
    //     cur.left&&stack.push(cur.left)
    // }
    // return res
    // 统一迭代方法
    const stack = []
    const res = []
    if(root) stack.push(root);
    while(stack.length){
        const node = stack.pop()
        if(!node){
            //遇到空值则把栈顶值加入结果集合
            res.push(stack.pop().val)
            continue;
        }
        //压栈顺序，右左中
        node.right&&stack.push(node.right);//右
        node.left&&stack.push(node.left);//左
        stack.push(node)//中
        stack.push(null)//标识
    }
    return res
};
// @lc code=end

