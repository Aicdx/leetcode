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
    let dummyHead = new ListNode(0,head)
    // 定义快慢节点从表头的前一个节点开始
    let fast = slow = dummyHead
    // 让快节点先走n步
    while(n--){
        fast = fast.next
    }
    /*
    快慢节点一起走 此时fast走到最后一个节点，
    则slow走到n的前一个节点
    */ 
    while(fast.next !== null){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummyHead.next
};
// @lc code=end

