/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const resArr = []
    const backTracking = (s,startIndex,route)=>{
        const len = s.length
        //收集结果
        if(route.length === 4 && startIndex>=len){
            resArr.push(route.join('.'))
            return;
        }
        //剪枝
        if(route.len === 4 && startIndex>=len) return;
        for(let i = startIndex;i<len;i++){
            let tempStr = s.slice(startIndex,i+1)
            //当前字符串符合ip规则
            if(isValidIpSegment(tempStr)){
                route.push(tempStr);
                backTracking(s,i+1,route);
                route.pop()
            }
        }
    }
    backTracking(s,0,[])
    return resArr;
};
const isValidIpSegment = function(str){
    let tempVal = Number(str);
    if(str.length === 0 || isNaN(tempVal)
        || tempVal > 255 || tempVal < 0
        || (str.length>1 && str[0] === '0')
    ){
        return false
    }
    return true
}
// @lc code=end

