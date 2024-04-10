/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    //删除操作统一使用dummy
    const dummy = new ListNode()
    dummy.next = head
    //初始化快慢指针
    let fast = dummy
    let slow = dummy
    //快指针先走n步
    while(n!==0){
        fast = fast.next
        n--
    }
    // 一起走
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    //走完了删除慢指针的下一个即为删除n
    slow.next = slow.next.next
    return dummy.next
};
// @lc code=end

