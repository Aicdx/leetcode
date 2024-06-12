/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
//    判断是否为环，快慢指针，
// 如果慢指针能追上快指针，则为环，此时slow===fast
// 追不上。此时fast.next = null,遍历结束
    if(!head || !head.next) return false
    let slow = head.next,fast = head.next.next
    while(fast && fast.next &&fast!==slow){
        fast = fast.next.next
        slow = slow.next
    }
    return fast === slow
};
// @lc code=end

