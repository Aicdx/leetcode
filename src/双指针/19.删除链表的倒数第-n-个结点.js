/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //双指针 fast先走n步，删除就是倒数n个
    //虚拟头结点，处理n前一个
    let dummyHead = new ListNode(0,head)
    let fast = slow = dummyHead;
    while(n--){
        fast = fast.next;
    }
    while(fast.next){
        fast = fast.next;
        slow= slow.next
    }
    slow.next = slow.next.next
    return dummyHead.next
};
// @lc code=end

