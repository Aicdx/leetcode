/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
   //初始化前驱节点
    let pre = null
    //初始化目标节点为head
    let cur = head
    //只要目标节点不为空就继续
    while(cur !== null){
        // 记录目标节点的next
        let next = cur.next
        //反转指针
        cur.next = pre
        //pre往前走
        pre = cur
        //目标节点往前
        cur = next
    }
    return pre
};
// @lc code=end

