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
    //双指针写法
    let dummyHead = new ListNode(0,head);
    let cur = dummyHead
    while(cur.next && cur.next.next){
        //  记录node1 和node 3
        let temp = cur.next,temp1 = cur.next.next.next;
        
        // 移动cur指针指向第二个元素
        cur.next = cur.next.next
        // 移动第二个元素的指针指向第一个
        cur.next.next = temp
        // 移动第一个的指针指向第三个
        temp.next = temp1
        
        // 维护cur 移动两位实现两两翻转
        cur = cur.next.next
    }
    return dummyHead.next

};
// @lc code=end

