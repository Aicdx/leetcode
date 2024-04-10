/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */
// @lc code=start
function isValid(s: string): boolean {
  const leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // if(!s){
  //     return true
  // }
  // const stack:string[] = []
  // const len = s.length
  // for(let i=0;i<len;i++){
  //     const ch = s[i]
  //     if(leftToRight[ch]){
  //         stack.push(leftToRight[ch])
  //     }else{
  //         if(!stack.length || stack.pop() !== ch){
  //             return false
  //         }
  //     }
  // }
  // return !stack.length
  //空字符返回true
  if (!s) {
    return true;
  }
  const stack: string[] = [];
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const ch = s[i];
    //当左括号时入栈
    if (leftToRight[ch]) {
      stack.push(leftToRight[ch]);
    } else {
      //右括号出栈
      //当栈为空或者出栈左括号和右括号不匹配是，返回false
      //判断操作已经做了出栈操作
      if (!stack.length || stack.pop() !== ch) {
        return false;
      }
    }
  }
  return !stack.length;
}
// @lc code=end
