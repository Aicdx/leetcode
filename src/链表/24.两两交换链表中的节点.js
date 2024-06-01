/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
    let dummyHead = new ListNode(0,head);
    let cur = dummyHead
    while(cur.next&& cur.next.next){
        // 记录node1和node3
        let temp = cur.next,temp1 = cur.next.next.next;
        // cur指向第二个节点
        cur.next = cur.next.next
        // 第二个节点指向原链表第一个节点
        cur.next.next = temp;
        // 原第一个节点指向第三个节点，实现反转
        temp.next = temp1;
        // 维护cur
        cur = cur.next.next
    }
    return dummyHead.next
};
// @lc code=end

