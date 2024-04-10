/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    //思路 
    // 1、寻找需要反转的起点 记录反转起点上一个
    // 2、反转
    // 3、将反转后的链表链接上
    let pre,cur,leftHead
    const dummy = new ListNode()
    dummy.next = head
    // 1
    let p = dummy
    for(let i=0;i<left-1;i++){
        p = p.next
    }
    leftHead = p
    //反转开始节点
    let start = leftHead.next
    pre = start
    cur = pre.next
    //重复反转至right
    for(let i =left;i<right;i++){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur =next
    }
    //反转完毕，链接
    leftHead.next = pre
    start.next = cur
    return dummy.next

};
// @lc code=end

