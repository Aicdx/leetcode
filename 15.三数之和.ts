/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  let res: number[][] = [];
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    // 左指针 j
    let j = i + 1;
    // 右指针k
    let k = len - 1;
    // 如果遇到重复的数字，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      //缓存三数之和
      const count = nums[i] + nums[j] + nums[k];
      if (count < 0) {
        //左指针前进
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (count > 0) {
        //右指针后退
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        // 得到目标数字组合，推入结果数组
        // res.push([nums[i], nums[j], nums[k]]);

        // // 左右指针一起前进
        // j++;
        // k--;

        // // 若左指针元素重复，跳过
        // while (j < k && nums[j] === nums[j - 1]) {
        //   j++;
        // }

        // // 若右指针元素重复，跳过
        // while (j < k && nums[k] === nums[k + 1]) {
        //   k--;
        // }
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return res;
}
// @lc code=end
