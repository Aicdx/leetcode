/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // 首先判断是否为环
    if(!head || !head.next) return null
    let slow = head.next,fast = head.next.next
    while(fast &&fast.next &&slow !==fast){
        fast = fast.next.next
        slow = slow.next
    }
    // 如果为环
    if(slow === fast){
        // fast重新从0出发，
        // slow从快慢节点相遇点出发，
        // 相交点就是入口
        fast = head
        while(fast !== slow){
            fast = fast.next
            slow = slow.next
        }
        return fast
    }
    return null
};
// @lc code=end

