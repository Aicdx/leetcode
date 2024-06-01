/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // let pre = null
    // let cur = head
    // while(cur){
    //     const temp = cur.next
    //     cur.next = pre
    //     pre = cur
    //     cur = temp
    // }
    // return pre
    return reverse(head,null)
};
const reverse = function(cur,pre){
    if(!cur) return pre;
    const temp = cur.next;
    cur.next = pre
    return reverse(temp,cur)
}
// @lc code=end

