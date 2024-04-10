/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    //单只有一个或0个
    if(!head || !head.next){
        return head
    }
    let dummy = new ListNode()
    dummy.next = head
    let cur = dummy
    while(cur.next && cur.next.next){
        if(cur.next.val === cur.next.next.val){
            //记录当前重复值
            let val = cur.next.val
            //发现有重复的继续循环比较下一个
            while(cur.next && cur.next.val===val){
                cur.next = cur.next.next
            }
        }else{
            cur = cur.next
        }
    }
    return dummy.next
};
// @lc code=end

